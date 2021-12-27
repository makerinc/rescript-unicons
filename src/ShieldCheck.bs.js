// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilShieldCheck from "@iconscout/react-unicons/icons/uil-shield-check";

var Impl = {};

function ShieldCheck(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilShieldCheck, tmp);
}

var make = React.memo(ShieldCheck);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
