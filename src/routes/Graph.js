import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";
import * as Ldm from "../md/full";

function Graph() {
  const series = [
    {
      name: "label.customers.customer_region",
      data: ["abitUNiGeSYG"]
    }
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    title: {
      text: "Fiction Books Sales"
    },
    xaxis: {
      categories: ["label.products.product_name"]
    },
    yaxis: {
      title: {
        text: undefined
      }
    },
    tooltip: {
      x: {
        format: "dd/MM/yy"
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center"
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Graph;
