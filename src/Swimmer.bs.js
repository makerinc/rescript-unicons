// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSwimmer from "@iconscout/react-unicons/icons/uil-swimmer";

var Impl = {};

function Swimmer(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSwimmer, tmp);
}

var make = React.memo(Swimmer);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
