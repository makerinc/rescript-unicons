// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilShovel from "@iconscout/react-unicons/icons/uil-shovel";

var Impl = {};

function Shovel(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilShovel, tmp);
}

var make = React.memo(Shovel);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
