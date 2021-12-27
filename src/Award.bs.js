// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilAward from "@iconscout/react-unicons/icons/uil-award";

var Impl = {};

function Award(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilAward, tmp);
}

var make = React.memo(Award);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
