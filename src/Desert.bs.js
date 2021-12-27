// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilDesert from "@iconscout/react-unicons/icons/uil-desert";

var Impl = {};

function Desert(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilDesert, tmp);
}

var make = React.memo(Desert);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
