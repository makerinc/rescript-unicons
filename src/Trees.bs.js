// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTrees from "@iconscout/react-unicons/icons/uil-trees";

var Impl = {};

function Trees(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTrees, tmp);
}

var make = React.memo(Trees);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
