// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFileSlash from "@iconscout/react-unicons/icons/uil-file-slash";

var Impl = {};

function FileSlash(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFileSlash, tmp);
}

var make = React.memo(FileSlash);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
