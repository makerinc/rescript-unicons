// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilGraphBar from "@iconscout/react-unicons/icons/uil-graph-bar";

var Impl = {};

function GraphBar(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilGraphBar, tmp);
}

var make = React.memo(GraphBar);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
