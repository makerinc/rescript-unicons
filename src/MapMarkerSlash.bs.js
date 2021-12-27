// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMapMarkerSlash from "@iconscout/react-unicons/icons/uil-map-marker-slash";

var Impl = {};

function MapMarkerSlash(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMapMarkerSlash, tmp);
}

var make = React.memo(MapMarkerSlash);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
