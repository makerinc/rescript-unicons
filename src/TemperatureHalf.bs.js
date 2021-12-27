// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTemperatureHalf from "@iconscout/react-unicons/icons/uil-temperature-half";

var Impl = {};

function TemperatureHalf(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTemperatureHalf, tmp);
}

var make = React.memo(TemperatureHalf);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
