// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilJackhammer from "@iconscout/react-unicons/icons/uil-jackhammer";

var Impl = {};

function Jackhammer(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilJackhammer, tmp);
}

var make = React.memo(Jackhammer);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
