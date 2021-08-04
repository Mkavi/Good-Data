import React, { useState } from "react";
import {
  newMeasure,
  idRef,
  attributeDisplayFormRef,
  newPositiveAttributeFilter,
  isNegativeAttributeFilter
} from "@gooddata/sdk-model";
import { Execute, Kpi, ErrorComponent } from "@gooddata/sdk-ui";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import {
  filterIsEmpty,
  isPositiveAttributeFilter,
  isAttributeElementsByRef,
  attributeIdentifier,
  newNegativeAttributeFilter
} from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Ldm from "../md/full";
import * as LdmExt from "../md/ext";
import ExcelExport from "./ExcelExport";
import "../sai.css";
import { GDModal } from "../components/Modal";
import { GDHighCharts } from "../components/Highcharts";

export default () => {
  const [modalData, setModalData] = useState({ show: false, data: null });

  const barChartClickHanlder = data => {
    setModalData({
      show: true,
      data: {
        category: data.category,
        value: data.y,
        status: data.series?.name
      }
    });
  };

  const getChartData = result => {
    const colors = {
      cancelled: "rgb(195,255,176)",
      delivered: "rgb(175,232,255)",
      returned: "rgb(255,143,179)"
    };

    const { data = [], headerItems = [] } = result.dataView || {};
    const [categories = [], statuses = []] = headerItems;

    return (categories[0] || []).map((category, index) => {
      const name = category?.attributeHeaderItem?.name;
      return {
        name,
        color: colors[name.toLowerCase()],
        y: parseInt(data[index][0])
      };
    });
  };

  const getHightChartsConfig = result => {
    return {
      chart: {
        type: "pie",
        height: 325
      },
      title: null,
      credits: {
        enabled: false
      },
      subtitle: null,
      plotOptions: {
        pie: {
          shadow: false,
          center: ["50%", "50%"]
        },

        series: {
          dataLabels: {
            enabled: false
          }
        }
      },
      tooltip: {
        valueSuffix: ""
      },
      legend: {
        enabled: true,
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 0
      },
      series: [
        {
          name: "Versions",
          showInLegend: true,
          data: getChartData(result),
          size: "80%",
          innerSize: "50%",
          dataLabels: {},
          id: "versions"
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 400
            },
            chartOptions: {
              series: [
                {},
                {
                  id: "versions",
                  dataLabels: {
                    enabled: false
                  }
                }
              ]
            }
          }
        ]
      }
    };
  };

  const getBarChartData = barresult => {
    const colors = {
      cancelled: "rgb(195,255,176)",
      delivered: "rgb(175,232,255)",
      returned: "rgb(255,143,179)"
    };

    const { data = [], headerItems = [] } = barresult.dataView || {};
    const [categories = [], statuses = []] = headerItems;

    return {
      categories: (categories[0] || []).map(c => c?.attributeHeaderItem?.name),
      data: (statuses[0] || []).map((status, index) => {
        const name = status?.measureHeaderItem?.name;
        const statusData = data.map(item => parseInt(item[index]));

        return { name, data: statusData };
      })
    };
  };

  const getBarHightChartsConfig = barresult => {
    const barChartData = getBarChartData(barresult);

    return {
      chart: {
        type: "bar",
        height: 325
      },
      title: null,
      credits: {
        enabled: false
      },
      xAxis: {
        categories: barChartData.categories
      },
      yAxis: {
        min: 0,
        title: null
      },
      legend: {
        reversed: true,
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 0
      },
      plotOptions: {
        series: {
          stacking: "normal",
          cursor: "pointer",
          point: {
            events: {
              click: function() {
                barChartClickHanlder(this);
              }
            }
          }
        }
      },
      series: barChartData.data
    };
  };

  const filterPositiveAttribute = (filter, filterName) => {
    const {
      positiveAttributeFilter,
      positiveAttributeFilter: { displayForm }
    } = filter;
    const inElements = filter.positiveAttributeFilter.in;
    const checkLengthOfFilter = isAttributeElementsByRef(
      positiveAttributeFilter.in
    )
      ? positiveAttributeFilter.in.uris.length !== 0
      : positiveAttributeFilter.in.values.length !== 0;
    if (!checkLengthOfFilter) {
      setFilterError({
        message: "The filter must have at least one item selected",
        causedFilter: filterName
      });
      return [];
    } else {
      return [
        {
          positiveAttributeFilter: {
            displayForm,
            in: inElements
          }
        }
      ];
    }
  };

  const filterNegativeAttribute = filter => {
    const {
      negativeAttributeFilter: { notIn, displayForm }
    } = filter;

    const checkLengthOfFilter = isAttributeElementsByRef(notIn)
      ? notIn.uris.length !== 0
      : notIn.values.length !== 0;
    return checkLengthOfFilter
      ? [
          {
            negativeAttributeFilter: {
              displayForm,
              notIn
            }
          }
        ]
      : [];
  };

  const updateFilters = (filter, setState, filterName) => {
    setState([]);
    setFilterError({
      message: undefined,
      causedFilter: undefined
    });

    let filters = [];
    if (isPositiveAttributeFilter(filter)) {
      filters = filterPositiveAttribute(filter, filterName);
    } else {
      filters = filterNegativeAttribute(filter);
    }

    setState({ filters });

    setFiltersLabels(prevState => ({
      ...prevState,
      [filterName]: !filterIsEmpty(filter) ? "Custom" : "All"
    }));
  };

  const [filterError, setFilterError] = useState({
    message: undefined,
    causedFilter: undefined
  });

  const [orderStatusFilter, setOrderStatusFilter] = useState({});
  const [productCategoryFilter, setProductCategoryFilter] = useState(
    newNegativeAttributeFilter(attributeDisplayFormRef(Ldm.ProductCategory), {
      uris: []
    })
  );
  const [productNameFilter, setProductNameFilter] = useState(
    newNegativeAttributeFilter(attributeDisplayFormRef(Ldm.ProductName), {
      uris: []
    })
  );
  const [customerRegionFilter, setCustomerRegionFilter] = useState({});
  const [customerStateFilter, setCustomerStateFilter] = useState({});
  const [customerCityFilter, setCustomerCityFilter] = useState({});
  const [customerNameFilter, setCustomerNameFilter] = useState({});

  const [filtersLabels, setFiltersLabels] = useState({
    orderStatus: "All",
    productCategory: "All",
    productName: "All",
    customerRegion: "All",
    customerState: "All",
    customerCity: "All",
    customerName: "All"
  });

  const getFilters = filters =>
    filters.reduce((acc, current = {}) => {
      const attrFilters = current.filters || [];
      let applicableFilters = [];

      attrFilters.forEach(f => {
        if (isPositiveAttributeFilter(f) || isNegativeAttributeFilter(f)) {
          if (!filterIsEmpty(f)) {
            applicableFilters.push(f);
          }
        }
      });

      return acc.concat(applicableFilters);
    }, []);

  return (
    <>
      <h3>Orders</h3>
      <div className="container1">
        <div className="filter">
          <span className="label_filter">Order Status</span>
          <AttributeFilter
            // identifier={attributeIdentifier(Ldm.OrderStatus)}
            filter={newNegativeAttributeFilter(Ldm.OrderStatus, [])}
            onApply={filter => {
              updateFilters(filter, setOrderStatusFilter, "orderStatus");
            }}
            title={
              filterError.causedFilter === "orderStatus" && filterError.message
                ? "None"
                : filtersLabels.orderStatus
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Category</span>
          <AttributeFilter
            //identifier={attributeIdentifier(Ldm.ProductCategory)}
            filter={productCategoryFilter}
            //parentFilters={getFilters([orderStatusFilter])}
            onApply={filter => {
              updateFilters(
                filter,
                setProductCategoryFilter,
                "productCategory"
              );
            }}
            title={
              filterError.causedFilter === "productCategory" &&
              filterError.message
                ? "None"
                : filtersLabels.productCategory
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Name</span>
          <AttributeFilter
            //identifier={attributeIdentifier(Ldm.ProductName)}
            filter={productNameFilter}
            parentFilters={
              productCategoryFilter ? getFilters([productCategoryFilter]) : []
            }
            parentFilterOverAttribute={idRef(
              LdmExt.productIdAttributeIdentifier
            )}
            onApply={filter => {
              updateFilters(filter, setProductNameFilter, "productName");
            }}
            title={
              filterError.causedFilter === "productName" && filterError.message
                ? "None"
                : filtersLabels.productName
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Region</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerRegion, [])}
            onApply={filter => {
              updateFilters(filter, setCustomerRegionFilter, "customerRegion");
            }}
            title={
              filterError.causedFilter === "customerRegion" &&
              filterError.message
                ? "None"
                : filtersLabels.customerRegion
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer State</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerState, [])}
            parentFilters={getFilters([customerRegionFilter])}
            onApply={filter => {
              updateFilters(filter, setCustomerStateFilter, "customerState");
            }}
            title={
              filterError.causedFilter === "customerState" &&
              filterError.message
                ? "None"
                : filtersLabels.customerState
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer City</span>
          <AttributeFilter
            // identifier={attributeIdentifier(Ldm.CustomerCity)}
            filter={newNegativeAttributeFilter(Ldm.CustomerCity, [])}
            onApply={filter => {
              updateFilters(filter, setCustomerCityFilter, "customerCity");
            }}
            title={
              filterError.causedFilter === "customerCity" && filterError.message
                ? "None"
                : filtersLabels.customerCity
            }
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Name</span>
          <AttributeFilter
            // identifier={attributeIdentifier(Ldm.CustomerName)}
            filter={newNegativeAttributeFilter(Ldm.CustomerName, [])}
            onApply={filter => {
              updateFilters(filter, setCustomerNameFilter, "customerName");
            }}
            title={
              filterError.causedFilter === "customerName" && filterError.message
                ? "None"
                : filtersLabels.customerName
            }
          />
        </div>
        <div className="container2">
          <div className="container21">
            {" "}
            <label>Delivered</label>{" "}
          </div>
          <div className="container21">
            {" "}
            <label>Returned</label>{" "}
          </div>
          <div className="container21">
            {" "}
            <label>Cancelled</label>{" "}
          </div>
          <div className="container21">
            {" "}
            <label>Total Orders</label>{" "}
          </div>
          <div className="container2111"> </div> <br></br>
          <div className="clr"></div>
          <div className="container211">
            <Kpi measure={newMeasure(idRef("ac6tLxDmebO7", "measure"))} />
          </div>
          <div className="container211">
            <Kpi measure={newMeasure(idRef("acltRLTPbQaV", "measure"))} />
          </div>
          <div className="container211">
            <Kpi measure={newMeasure(idRef("abLtUXDqbMZN", "measure"))} />
          </div>
          <div className="container211">
            <Kpi measure={newMeasure(idRef("abitUNiGeSYG", "measure"))} />
          </div>
          <div className="container2111"> </div>
        </div>
        <div className="clr"></div>
        <div className="container3">
          <div className="container31">
            {" "}
            <label>Top 10 Products by Region</label>{" "}
          </div>
          <div className="container31">
            {" "}
            <label>Order Status</label>{" "}
          </div>
        </div>
        <div className="clr"></div>
        <div className="block" style={{ height: 300 }}>
          {filterError.message ? (
            <ErrorComponent message={filterError.message} />
          ) : (
            <Execute
              seriesBy={[
                newMeasure(idRef("ac6tLxDmebO7", "measure")),
                newMeasure(idRef("acltRLTPbQaV", "measure")),
                newMeasure(idRef("abLtUXDqbMZN", "measure"))
              ]}
              slicesBy={[Ldm.CustomerRegion]}
              filters={getFilters([
                orderStatusFilter,
                productCategoryFilter,
                productNameFilter,
                customerRegionFilter,
                customerStateFilter,
                customerCityFilter,
                customerNameFilter
              ])}
            >
              {barexecution => {
                const { isLoading, result } = barexecution;
                if (isLoading || !result) {
                  return <div>Getting your data... Please wait.</div>;
                } else {
                  return (
                    <GDHighCharts options={getBarHightChartsConfig(result)} />
                  );
                }
              }}
            </Execute>
          )}
        </div>
        <div className="block" style={{ height: 300 }}>
          {filterError.message ? (
            <ErrorComponent message={filterError.message} />
          ) : (
            <Execute
              seriesBy={[newMeasure(idRef("abitUNiGeSYG", "measure"))]}
              slicesBy={[Ldm.OrderStatus]}
              filters={getFilters([
                orderStatusFilter,
                productCategoryFilter,
                productNameFilter,
                customerRegionFilter,
                customerStateFilter,
                customerCityFilter,
                customerNameFilter
              ])}
            >
              {execution => {
                const { isLoading, result } = execution;
                if (isLoading || !result) {
                  return <div>Getting your data... Please wait.</div>;
                } else {
                  return (
                    <GDHighCharts options={getHightChartsConfig(result)} />
                  );
                }
              }}
            </Execute>
          )}
        </div>{" "}
        <br></br>
        <div className="clr"></div>
        <div className="export" style={{ height: 50 }}>
          <ExcelExport />
        </div>
        <br></br>
        <div className="clr"></div>
        <div className="container3">
          <div className="container4">
            {" "}
            <label>Product Details</label>{" "}
          </div>
        </div>
        <div className="clr"></div>
        <div className="container3">
          <div className="center">
            <div className="download-btn btn-1">
              <div className="top"></div>
            </div>
          </div>
        </div>
        <div className="clr"></div>
        <div className="block1" style={{ height: 550 }}>
          <InsightView
            insight={"abG4RMpBhZyp"}
            config={{
              enableCompactSize: true
            }}
            // filters={filters}
          />
        </div>
      </div>

      <GDModal
        open={modalData.show}
        onClose={() => {
          setModalData({ show: false, data: null });
        }}
      >
        <InsightView
          insight={"abG4RMpBhZyp"}
          config={{
            enableCompactSize: true
          }}
          filters={[
            newPositiveAttributeFilter(Ldm.CustomerRegion, [
              modalData.data?.category
            ]),
            newPositiveAttributeFilter(Ldm.OrderStatus, [
              modalData.data?.status
            ])
          ]}
        />
      </GDModal>
    </>
  );
};
