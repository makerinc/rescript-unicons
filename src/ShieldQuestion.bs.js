// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilShieldQuestion from "@iconscout/react-unicons/icons/uil-shield-question";

var Impl = {};

function ShieldQuestion(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilShieldQuestion, tmp);
}

var make = React.memo(ShieldQuestion);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
