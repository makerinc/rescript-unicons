// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilAnnoyed from "@iconscout/react-unicons/icons/uil-annoyed";

var Impl = {};

function Annoyed(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilAnnoyed, tmp);
}

var make = React.memo(Annoyed);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
