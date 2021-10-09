// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilStopwatch from "@iconscout/react-unicons/icons/uil-stopwatch";

var Impl = {};

function Stopwatch(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilStopwatch, tmp);
}

var make = Stopwatch;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
