// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilEnvelopeShield from "@iconscout/react-unicons/icons/uil-envelope-shield";

var Impl = {};

function EnvelopeShield(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilEnvelopeShield, tmp);
}

var make = React.memo(EnvelopeShield);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
