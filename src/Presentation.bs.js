// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPresentation from "@iconscout/react-unicons/icons/uil-presentation";

var Impl = {};

function Presentation(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPresentation, tmp);
}

var make = React.memo(Presentation);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
