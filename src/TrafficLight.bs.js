// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTrafficLight from "@iconscout/react-unicons/icons/uil-traffic-light";

var Impl = {};

function TrafficLight(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTrafficLight, tmp);
}

var make = TrafficLight;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
