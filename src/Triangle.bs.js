// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTriangle from "@iconscout/react-unicons/icons/uil-triangle";

var Impl = {};

function Triangle(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTriangle, tmp);
}

var make = Triangle;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
