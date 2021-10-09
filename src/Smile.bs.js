// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSmile from "@iconscout/react-unicons/icons/uil-smile";

var Impl = {};

function Smile(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSmile, tmp);
}

var make = Smile;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */