// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCircuit from "@iconscout/react-unicons/icons/uil-circuit";

var Impl = {};

function Circuit(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCircuit, tmp);
}

var make = React.memo(Circuit);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
