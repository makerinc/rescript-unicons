// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMapMarker from "@iconscout/react-unicons/icons/uil-map-marker";

var Impl = {};

function MapMarker(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMapMarker, tmp);
}

var make = MapMarker;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */