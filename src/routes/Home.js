// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import {
  newMeasure,
  idRef,
  newPositiveAttributeFilter,
  attributeDisplayFormRef
} from "@gooddata/sdk-model";
import { Execute, Kpi, ErrorComponent } from "@gooddata/sdk-ui";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { newNegativeAttributeFilter, filterIsEmpty } from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Ldm from "../md/full";
import ExcelExport from "./ExcelExport";
import "../sai.css";
import { GDModal } from "../components/Modal";
import { GDHighCharts } from "../components/Highcharts";
import { isPositiveAttributeFilter } from "@gooddata/sdk-model";
import { isAttributeElementsByRef } from "@gooddata/sdk-model";
import { attributeIdentifier } from "@gooddata/sdk-model";

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

  const filterPositiveAttribute = (filter, setState) => {
    let filters;
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
    if (checkLengthOfFilter) {
      filters = [
        {
          positiveAttributeFilter: {
            displayForm,
            in: inElements
          }
        }
      ];
    } else {
      setFilterError("The filter must have at least one item selected");
    }

    setState({ filters });
  };

  const filterNegativeAttribute = (filter, setState) => {
    let filters;
    const {
      negativeAttributeFilter: { notIn, displayForm }
    } = filter;

    const checkLengthOfFilter = isAttributeElementsByRef(notIn)
      ? notIn.uris.length !== 0
      : notIn.values.length !== 0;
    if (checkLengthOfFilter) {
      filters = [
        {
          negativeAttributeFilter: {
            displayForm,
            notIn
          }
        }
      ];
    }
    setState({ filters });
  };

  const updateFilters = (filter, setState) => {
    setState([]);
    setFilterError(undefined);
    console.log(filter);

    if (isPositiveAttributeFilter(filter)) {
      filterPositiveAttribute(filter, setState);
    } else {
      filterNegativeAttribute(filter, setState);
    }
  };

  const [orderStatusFilter, setOrderStatusFilter] = useState(
    newNegativeAttributeFilter(attributeDisplayFormRef(Ldm.OrderStatus), [])
  );
  const [filterError, setFilterError] = useState(undefined);
  const [productCategoryFilter, setProductCategoryFilter] = useState(
    newNegativeAttributeFilter(Ldm.ProductCategory, [])
  );
  const [productNameFilter, setProductNameFilter] = useState({});
  const [customerRegionFilter, setCustomerRegionFilter] = useState({});
  const [customerStateFilter, setCustomerStateFilter] = useState({});
  const [customerCityFilter, setCustomerCityFilter] = useState({});
  const [customerNameFilter, setCustomerNameFilter] = useState({});

  // const getFilterText = attr => {
  //   const identifier = attr.attribute?.displayForm?.identifier;

  //   const identified = filters.find(fltr => {
  //     const filterName =
  //       (fltr.negativeAttributeFilter || fltr.positiveAttributeFilter || {})
  //         .displayForm?.identifier || "";
  //     return identifier === filterName;
  //   });

  //   if (identified) {
  //     const filterVlaue =
  //       identified.negativeAttributeFilter ||
  //       identified.positiveAttributeFilter ||
  //       {};
  //     if (filterVlaue.notIn?.values?.length || filterVlaue.in?.values?.length) {
  //       return "Custom";
  //     } else {
  //       return "All";
  //     }
  //   } else {
  //     return "All";
  //   }
  // };

  const getFilters = filters => filters.filter(f => f);

  return (
    <>
      <h3>Orders</h3>
      <div className="container1">
        <div className="filter">
          <span className="label_filter">Order Status</span>
          <AttributeFilter
            identifier={attributeIdentifier(Ldm.OrderStatus)}
            onApply={filter => {
              updateFilters(filter, setOrderStatusFilter);
            }}
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Category</span>
          <AttributeFilter
            identifier={attributeIdentifier(Ldm.ProductCategory)}
            parentFilters={getFilters([orderStatusFilter])}
            onApply={filter => {
              updateFilters(filter, setProductCategoryFilter);
            }}
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Name</span>
          <AttributeFilter
            // filter={newNegativeAttributeFilter(Ldm.ProductName, [])}
            identifier={attributeIdentifier(Ldm.ProductName)}
            parentFilters={getFilters([
              orderStatusFilter,
              productCategoryFilter
            ])}
            onApply={filter => {
              updateFilters(filter, setProductNameFilter);
            }}
            // title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Region</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerRegion, [])}
            onApply={setCustomerRegionFilter}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer State</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerState, [])}
            onApply={setCustomerStateFilter}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer City</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerCity, [])}
            onApply={setCustomerCityFilter}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Name</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerName, [])}
            onApply={setCustomerNameFilter}
            title="All"
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
          {/* <InsightView
            insight={"abt4T3CjejSr"}
            onDrill={event => {
              const result = event.dataView;
              barChartClickHanlder(event.drillContext?.intersection || []);
            }}
            drillableItems={[
              HeaderPredicates.identifierMatch("label.products.product_name"),
              HeaderPredicates.uriMatch(
                "/gdc/md/fn2ibwpivc9gallza3siyn3vk8fbl4oq/obj/782"
              )
            ]}
            filters={filters}
          /> */}
          {filterError ? (
            <ErrorComponent message={filterError} />
          ) : (
            <Execute
              seriesBy={[
                newMeasure(idRef("ac6tLxDmebO7", "measure")),
                newMeasure(idRef("acltRLTPbQaV", "measure")),
                newMeasure(idRef("abLtUXDqbMZN", "measure"))
              ]}
              slicesBy={[Ldm.CustomerRegion]}
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
          {filterError ? (
            <ErrorComponent message={filterError} />
          ) : (
            <Execute
              seriesBy={[newMeasure(idRef("abitUNiGeSYG", "measure"))]}
              slicesBy={[Ldm.OrderStatus]}
              // filters={filters}
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
