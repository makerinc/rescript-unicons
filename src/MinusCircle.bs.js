// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMinusCircle from "@iconscout/react-unicons/icons/uil-minus-circle";

var Impl = {};

function MinusCircle(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMinusCircle, tmp);
}

var make = MinusCircle;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
