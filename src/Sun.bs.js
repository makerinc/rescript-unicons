// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";

var Impl = {};

function Sun(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSun, tmp);
}

var make = React.memo(Sun);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
