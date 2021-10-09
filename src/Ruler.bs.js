// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilRuler from "@iconscout/react-unicons/icons/uil-ruler";

var Impl = {};

function Ruler(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilRuler, tmp);
}

var make = Ruler;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
