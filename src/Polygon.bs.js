// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPolygon from "@iconscout/react-unicons/icons/uil-polygon";

var Impl = {};

function Polygon(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPolygon, tmp);
}

var make = Polygon;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */