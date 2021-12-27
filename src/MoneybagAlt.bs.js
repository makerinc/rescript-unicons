// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMoneybagAlt from "@iconscout/react-unicons/icons/uil-moneybag-alt";

var Impl = {};

function MoneybagAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMoneybagAlt, tmp);
}

var make = React.memo(MoneybagAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
