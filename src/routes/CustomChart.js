// Build the chart
import React, { Component } from "react";
import Highcharts from "highcharts";
import Highchartsreact from "highcharts-react-official";
import * as Ldm from "../md/full";

const options = Ldm.Price;

class CustomChart extends Component {
  render() {
    return (
      <div>
        <Highchartsreact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default CustomChart;
