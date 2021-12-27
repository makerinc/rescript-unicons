// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilOutgoingCall from "@iconscout/react-unicons/icons/uil-outgoing-call";

var Impl = {};

function OutgoingCall(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilOutgoingCall, tmp);
}

var make = React.memo(OutgoingCall);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
