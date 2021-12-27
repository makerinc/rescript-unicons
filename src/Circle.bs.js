// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCircle from "@iconscout/react-unicons/icons/uil-circle";

var Impl = {};

function Circle(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCircle, tmp);
}

var make = React.memo(Circle);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
