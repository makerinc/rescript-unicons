// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

var Impl = {};

function Times(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTimes, tmp);
}

var make = React.memo(Times);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
