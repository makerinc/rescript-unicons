// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilBox from "@iconscout/react-unicons/icons/uil-box";

var Impl = {};

function Box(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilBox, tmp);
}

var make = React.memo(Box);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
