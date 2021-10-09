// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilGrid from "@iconscout/react-unicons/icons/uil-grid";

var Impl = {};

function Grid(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilGrid, tmp);
}

var make = Grid;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */