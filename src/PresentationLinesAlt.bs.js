// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPresentationLinesAlt from "@iconscout/react-unicons/icons/uil-presentation-lines-alt";

var Impl = {};

function PresentationLinesAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPresentationLinesAlt, tmp);
}

var make = React.memo(PresentationLinesAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
