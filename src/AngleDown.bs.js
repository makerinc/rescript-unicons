// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";

var Impl = {};

function AngleDown(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilAngleDown, tmp);
}

var make = React.memo(AngleDown);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
