// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilUnamused from "@iconscout/react-unicons/icons/uil-unamused";

var Impl = {};

function Unamused(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilUnamused, tmp);
}

var make = React.memo(Unamused);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
