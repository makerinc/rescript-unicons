// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";

var Impl = {};

function Phone(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPhone, tmp);
}

var make = React.memo(Phone);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
