// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMeh from "@iconscout/react-unicons/icons/uil-meh";

var Impl = {};

function Meh(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMeh, tmp);
}

var make = React.memo(Meh);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
