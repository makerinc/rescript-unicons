// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilHeartbeat from "@iconscout/react-unicons/icons/uil-heartbeat";

var Impl = {};

function Heartbeat(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilHeartbeat, tmp);
}

var make = React.memo(Heartbeat);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
