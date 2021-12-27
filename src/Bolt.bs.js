// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilBolt from "@iconscout/react-unicons/icons/uil-bolt";

var Impl = {};

function Bolt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilBolt, tmp);
}

var make = React.memo(Bolt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
