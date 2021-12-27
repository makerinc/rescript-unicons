// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPackage from "@iconscout/react-unicons/icons/uil-package";

var Impl = {};

function Package(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPackage, tmp);
}

var make = React.memo(Package);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
