// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSpinner from "@iconscout/react-unicons/icons/uil-spinner";

var Impl = {};

function Spinner(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSpinner, tmp);
}

var make = Spinner;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
