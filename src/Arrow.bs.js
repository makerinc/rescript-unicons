// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilArrow from "@iconscout/react-unicons/icons/uil-arrow";

var Impl = {};

function Arrow(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilArrow, tmp);
}

var make = React.memo(Arrow);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
