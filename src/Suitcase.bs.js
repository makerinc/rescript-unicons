// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSuitcase from "@iconscout/react-unicons/icons/uil-suitcase";

var Impl = {};

function Suitcase(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSuitcase, tmp);
}

var make = React.memo(Suitcase);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
