// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilChartGrowth from "@iconscout/react-unicons/icons/uil-chart-growth";

var Impl = {};

function ChartGrowth(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilChartGrowth, tmp);
}

var make = React.memo(ChartGrowth);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
