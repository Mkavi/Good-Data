// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { newMeasure, idRef } from "@gooddata/sdk-model";
import { Kpi } from "@gooddata/sdk-ui";
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
import CSVExport from "./CSVExport";
import "../sai.css";
import { GDModal } from "../components/Modal";
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

  console.log(filters);

  const [modalData, setModalData] = useState({ show: false, data: null });

  const barChartClickHanlder = data => {
    setModalData({ show: true, data });
  };

  const ldmFilters = [
    {
      name: "Order Status",
      attr: Ldm.OrderStatus
    },
    {
      name: "Product Category",
      attr: Ldm.ProductCategory
    },
    {
      name: "Product Name",
      attr: Ldm.ProductName
    },
    {
      name: "Customer Region",
      attr: Ldm.CustomerRegion
    },
    {
      name: "Customer State",
      attr: Ldm.CustomerState
    },
    {
      name: "Customer City",
      attr: Ldm.CustomerCity
    },
    {
      name: "Customer Name",
      attr: Ldm.CustomerName
    }
  ];

  const getFilterText = attr => {
    const identifier = attr.attribute?.displayForm?.identifier;

    const identified = filters.find(fltr => {
      const filterName =
        (fltr.negativeAttributeFilter || fltr.positiveAttributeFilter || {})
          .displayForm?.identifier || "";
      return identifier === filterName;
    });

    if (identified) {
      const filterVlaue =
        identified.negativeAttributeFilter ||
        identified.positiveAttributeFilter ||
        {};
      if (filterVlaue.notIn?.values?.length || filterVlaue.in?.values?.length) {
        return "Custom";
      } else {
        return "All";
      }
    } else {
      return "All";
    }
  };

  return (
    <>
      <h3>Orders</h3>
      <div className="container1">
        {ldmFilters.map(f => (
          <div className="filter" key={f.name}>
            <span className="label_filter">{f.name}</span>
            <AttributeFilter
              filter={newNegativeAttributeFilter(f.attr, [])}
              onApply={updateFilters}
              title={getFilterText(f.attr)}
            />
          </div>
        ))}
        {/*        <div className="filter">
          <span className="label_filter">Product Category</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.ProductCategory, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Product Name</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.ProductName, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Region</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerRegion, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer State</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerState, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer City</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerCity, [])}
            onApply={updateFilters}
            title="All"
          />
        </div>
        <div className="filter">
          <span className="label_filter">Customer Name</span>
          <AttributeFilter
            filter={newNegativeAttributeFilter(Ldm.CustomerName, [])}
            onApply={updateFilters}
            title="All"
          />
  </div> */}
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
          <InsightView
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
          />
        </div>
        <div className="block" style={{ height: 300 }}>
          <InsightView
            insight={"ab94Ssflh6Xk"}
            config={{ legend: { position: "bottom" } }}
            filters={filters}
          />
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
        <div className="block" style={{ height: 550, width: 1500 }}>
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
        <div>Sample, {JSON.stringify(modalData.data)}</div>
      </GDModal>
    </>
  );
};
