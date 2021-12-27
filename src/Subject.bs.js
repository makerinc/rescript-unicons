// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSubject from "@iconscout/react-unicons/icons/uil-subject";

var Impl = {};

function Subject(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSubject, tmp);
}

var make = React.memo(Subject);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
