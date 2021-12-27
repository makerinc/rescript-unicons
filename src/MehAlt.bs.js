// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMehAlt from "@iconscout/react-unicons/icons/uil-meh-alt";

var Impl = {};

function MehAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMehAlt, tmp);
}

var make = React.memo(MehAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
