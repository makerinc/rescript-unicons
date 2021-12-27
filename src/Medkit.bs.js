// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMedkit from "@iconscout/react-unicons/icons/uil-medkit";

var Impl = {};

function Medkit(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMedkit, tmp);
}

var make = React.memo(Medkit);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
