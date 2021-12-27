// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPathfinder from "@iconscout/react-unicons/icons/uil-pathfinder";

var Impl = {};

function Pathfinder(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPathfinder, tmp);
}

var make = React.memo(Pathfinder);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
