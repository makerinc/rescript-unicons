// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilOkta from "@iconscout/react-unicons/icons/uil-okta";

var Impl = {};

function Okta(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilOkta, tmp);
}

var make = React.memo(Okta);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
