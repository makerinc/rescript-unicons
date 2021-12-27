// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilLaptopCloud from "@iconscout/react-unicons/icons/uil-laptop-cloud";

var Impl = {};

function LaptopCloud(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilLaptopCloud, tmp);
}

var make = React.memo(LaptopCloud);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
