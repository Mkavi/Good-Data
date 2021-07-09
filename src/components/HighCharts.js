import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function GDHighCharts({ options }) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
