// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilImage from "@iconscout/react-unicons/icons/uil-image";

var Impl = {};

function $$Image(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilImage, tmp);
}

var make = React.memo($$Image);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
