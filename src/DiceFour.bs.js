// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilDiceFour from "@iconscout/react-unicons/icons/uil-dice-four";

var Impl = {};

function DiceFour(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilDiceFour, tmp);
}

var make = React.memo(DiceFour);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
