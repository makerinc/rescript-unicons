// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilExclude from "@iconscout/react-unicons/icons/uil-exclude";

var Impl = {};

function Exclude(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilExclude, tmp);
}

var make = React.memo(Exclude);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
