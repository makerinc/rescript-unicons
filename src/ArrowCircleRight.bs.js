// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilArrowCircleRight from "@iconscout/react-unicons/icons/uil-arrow-circle-right";

var Impl = {};

function ArrowCircleRight(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilArrowCircleRight, tmp);
}

var make = React.memo(ArrowCircleRight);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
