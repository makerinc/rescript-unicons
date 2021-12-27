// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilBackspace from "@iconscout/react-unicons/icons/uil-backspace";

var Impl = {};

function Backspace(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilBackspace, tmp);
}

var make = React.memo(Backspace);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
