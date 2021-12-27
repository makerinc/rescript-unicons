// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilColumns from "@iconscout/react-unicons/icons/uil-columns";

var Impl = {};

function Columns(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilColumns, tmp);
}

var make = React.memo(Columns);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
