// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilWrapText from "@iconscout/react-unicons/icons/uil-wrap-text";

var Impl = {};

function WrapText(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilWrapText, tmp);
}

var make = React.memo(WrapText);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
