// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";

var Impl = {};

function Youtube(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilYoutube, tmp);
}

var make = React.memo(Youtube);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
