// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCornerUpLeft from "@iconscout/react-unicons/icons/uil-corner-up-left";

var Impl = {};

function CornerUpLeft(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCornerUpLeft, tmp);
}

var make = React.memo(CornerUpLeft);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
