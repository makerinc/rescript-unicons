// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilGrin from "@iconscout/react-unicons/icons/uil-grin";

var Impl = {};

function Grin(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilGrin, tmp);
}

var make = Grin;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */