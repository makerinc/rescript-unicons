// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFileBlank from "@iconscout/react-unicons/icons/uil-file-blank";

var Impl = {};

function FileBlank(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFileBlank, tmp);
}

var make = React.memo(FileBlank);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
