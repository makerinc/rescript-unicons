// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilAngleDoubleUp from "@iconscout/react-unicons/icons/uil-angle-double-up";

var Impl = {};

function AngleDoubleUp(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilAngleDoubleUp, tmp);
}

var make = React.memo(AngleDoubleUp);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
