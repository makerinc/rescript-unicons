// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilArrowLeft from "@iconscout/react-unicons/icons/uil-arrow-left";

var Impl = {};

function ArrowLeft(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilArrowLeft, tmp);
}

var make = React.memo(ArrowLeft);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
