// (C) 2020 GoodData Corporation
import React, { useState } from "react";
import { newMeasure, idRef } from "@gooddata/sdk-model";
import { Kpi } from "@gooddata/sdk-ui";
import { DateFilter, defaultDateFilterOptions, DateFilterHelpers , AttributeFilter } from "@gooddata/sdk-ui-filters";
import { newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { InsightView } from "@gooddata/sdk-ui-ext";
import * as Ldm from "../md/full";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import ExcelExport from "./ExcelExport";
import CSVExport from "./CSVExport";
import "../sai.css";
import { PieChart } from "@gooddata/sdk-ui-charts/dist/charts/pieChart/PieChart";

export default () => {
    // Try changing the default filter 👇
    const [filters, setFilters] = useState([]);



    //const [filters, setFilters] = useState([
    //  newPositiveAttributeFilter(Ldm.ProductCategory, ["Outdoor", "Clothing"])
    //]);

    return (
        <>
            <h3>Orders</h3>
            <div class="container1">
                
                <div class="filter">
                    <span class="label_filter">Order Status</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.OrderStatus, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Product Category</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.ProductCategory, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Product Name</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.ProductName, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Customer Region</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.CustomerRegion, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Customer State</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.CustomerState, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Customer City</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.CustomerCity, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="filter">
                    <span class="label_filter">Customer Name</span> <br></br>
                    <AttributeFilter
                        filter={newNegativeAttributeFilter(Ldm.CustomerName, [])}
                        onApply={filter => setFilters([filter])}
                        title="All"
                    />
                </div>
                <div class="container2">
                    <div class="container21">
                        {" "}
                        <label>Delivered</label>{" "}
                    </div>
                    <div class="container21">
                        {" "}
                        <label>Returned</label>{" "}
                    </div>
                    <div class="container21">
                        {" "}
                        <label>Cancelled</label>{" "}
                    </div>
                    <div class="container21">
                        {" "}
                        <label>Total Orders</label>{" "}
                    </div>
                    <div class="container2111"> </div> <br></br>
                    <div class="clr"></div>
                    <div class="container211">
                        <Kpi measure={newMeasure(idRef("ac6tLxDmebO7", "measure"))} />
                    </div>
                    <div class="container211">
                        <Kpi measure={newMeasure(idRef("acltRLTPbQaV", "measure"))} />
                    </div>
                    <div class="container211">
                        <Kpi measure={newMeasure(idRef("abLtUXDqbMZN", "measure"))} />
                    </div>
                    <div class="container211">
                        <Kpi measure={newMeasure(idRef("abitUNiGeSYG", "measure"))} />
                    </div>
                    <div class="container2111"> </div>
                </div>
                <div class="clr"></div>
                <div class="container3">
                    <div class="container31">
                        {" "}
                        <label>Top 10 Products by Region</label>{" "}
                    </div>
                    <div class="container31">
                        {" "}
                        <label>Order Status</label>{" "}
                    </div>
                </div>
                <div class="clr"></div>
                <div class="block" style={{ height: 300 }}>
                    <InsightView
                        insight={"abt4T3CjejSr"}
                        onDrill={event => {
                          const  result=event.dataView;
                          console.log(result);
                        }}
                        drillableItems={[
                            HeaderPredicates.identifierMatch("label.products.product_name"),
                            HeaderPredicates.uriMatch("/gdc/md/fn2ibwpivc9gallza3siyn3vk8fbl4oq/obj/782"),
                        ]}
                        filters={filters}
                    />
                </div>
                <div class="block" style={{ height: 300 }}>
                    <InsightView
                        insight={"ab94Ssflh6Xk"}
                        config={{ legend: { position: "bottom" } }}
                        filters={filters}
                    />
                </div>{" "}
                <br></br>
                <div class="clr"></div>
                <div class="export"  style={{ height: 50 }}>
                    <ExcelExport />
                </div>
               
                <br></br>
                <div class="clr"></div>
                <div class="container3">
                    <div class="container4">
                        {" "}
                        <label>Product Details</label>{" "}
                    </div>
                </div>
                <div class="clr"></div>
                <div class="block" style={{ height: 550, width: 1500 }}>
                    <InsightView
                        insight={"abG4RMpBhZyp"}
                        config={{
                            enableCompactSize: true,
                        }}
                        filters={filters}
                    />
                </div>
            </div>
        </>
    );
};
