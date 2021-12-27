// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilExposureAlt from "@iconscout/react-unicons/icons/uil-exposure-alt";

var Impl = {};

function ExposureAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilExposureAlt, tmp);
}

var make = React.memo(ExposureAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
