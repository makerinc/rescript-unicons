// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilItalic from "@iconscout/react-unicons/icons/uil-italic";

var Impl = {};

function Italic(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilItalic, tmp);
}

var make = React.memo(Italic);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
