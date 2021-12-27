// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilClosedCaptioning from "@iconscout/react-unicons/icons/uil-closed-captioning";

var Impl = {};

function ClosedCaptioning(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilClosedCaptioning, tmp);
}

var make = React.memo(ClosedCaptioning);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
