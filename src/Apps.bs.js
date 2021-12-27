// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilApps from "@iconscout/react-unicons/icons/uil-apps";

var Impl = {};

function Apps(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilApps, tmp);
}

var make = React.memo(Apps);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
