// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFileCheckAlt from "@iconscout/react-unicons/icons/uil-file-check-alt";

var Impl = {};

function FileCheckAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFileCheckAlt, tmp);
}

var make = React.memo(FileCheckAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
