// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFileExclamation from "@iconscout/react-unicons/icons/uil-file-exclamation";

var Impl = {};

function FileExclamation(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFileExclamation, tmp);
}

var make = React.memo(FileExclamation);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
