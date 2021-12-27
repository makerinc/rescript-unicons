// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilStore from "@iconscout/react-unicons/icons/uil-store";

var Impl = {};

function Store(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilStore, tmp);
}

var make = React.memo(Store);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
