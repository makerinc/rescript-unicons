// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMouseAlt from "@iconscout/react-unicons/icons/uil-mouse-alt-2";

var Impl = {};

function MouseAlt2(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMouseAlt, tmp);
}

var make = React.memo(MouseAlt2);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
