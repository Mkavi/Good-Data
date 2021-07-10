// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import {
  newMeasure,
  idRef,
  newPositiveAttributeFilter
} from "@gooddata/sdk-model";
import { Execute, Kpi } from "@gooddata/sdk-ui";
import {
  DateFilter,
  defaultDateFilterOptions,
  DateFilterHelpers,
  AttributeFilter
} from "@gooddata/sdk-ui-filters";
import { newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Ldm from "../md/full";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import ExcelExport from "./ExcelExport";
import test1 from "./test1";
import CSVExport from "./CSVExport";
import "../sai.css";
import { GDModal } from "../components/Modal";
import { GDHighCharts } from "../components/HighCharts";
// import { PieChart } from "@gooddata/sdk-ui-charts/dist/charts/pieChart/PieChart";

export default () => {
  // Try changing the default filter 👇
  const [filters, setFilters] = useState([]);

  const updateFilters = filter => {
    const filterDisplayName =
      (filter.negativeAttributeFilter || filter.positiveAttributeFilter || {})
        .displayForm?.identifier || "";
    const prevFilters = [...filters];

    const filterIndex = prevFilters.findIndex(fltr => {
      const filterName =
        (fltr.negativeAttributeFilter || fltr.positiveAttributeFilter || {})
          .displayForm?.identifier || "";
      return filterDisplayName === filterName;
    });

    if (filterIndex < 0) {
      setFilters([...prevFilters, filter]);
    } else {
      prevFilters[filterIndex] = filter;
      setFilters(prevFilters);
    }
  };

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
        type: "pie"
      },
      title: null,
      subtitle: null,
      plotOptions: {
        pie: {
          shadow: false,
          center: ["50%", "50%"]
        }
      },
      tooltip: {
        valueSuffix: ""
      },
      legend: {
        enabled: true
      },
      series: [
        {
          name: "Versions",
          showInLegend: true,
          data: getChartData(result),
          size: "80%",
          innerSize: "60%",
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
        type: "bar"
      },
      title: null,
      xAxis: {
        categories: barChartData.categories
      },
      yAxis: {
        min: 0,
        title: null
      },
      legend: {
        reversed: true
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

  return (
    <>
      <h3>Orders</h3>
      <div className="container1">
        <div className="filter">
          <span className="label_filter">Order Status</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.OrderStatus, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Category</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.ProductCategory, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Name</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.ProductName, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Region</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerRegion, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer State</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerState, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer City</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerCity, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Name</span> <br></br>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerName, [])}
            onApply={updateFilters}
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
          <Execute
            seriesBy={[
              newMeasure(idRef("ac6tLxDmebO7", "measure")),
              newMeasure(idRef("acltRLTPbQaV", "measure")),
              newMeasure(idRef("abLtUXDqbMZN", "measure"))
            ]}
            slicesBy={[Ldm.CustomerRegion]}
          >
            {barexecution => {
              const { isLoading, error, result } = barexecution;
              if (isLoading || !result) {
                return <div>Getting your data... Please wait.</div>;
              } else {
                return (
                  <GDHighCharts options={getBarHightChartsConfig(result)} />
                );
              }
            }}
          </Execute>
        </div>
        <div className="block" style={{ height: 300 }}>
          {/* <InsightView
            insight={"ab94Ssflh6Xk"}
            config={{ legend: { position: "bottom" } }}
            filters={filters}
          /> */}
          <Execute
            seriesBy={[newMeasure(idRef("abitUNiGeSYG", "measure"))]}
            slicesBy={[Ldm.OrderStatus]}
            filters={filters}
          >
            {execution => {
              const { isLoading, error, result } = execution;
              if (isLoading || !result) {
                return <div>Getting your data... Please wait.</div>;
              } else {
                return <GDHighCharts options={getHightChartsConfig(result)} />;
              }
            }}
          </Execute>
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
            filters={filters}
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
//sample
/* {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}*/

//<div>Sample, {JSON.stringify(modalData.data)
//}</div>
