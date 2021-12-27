// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilDiscord from "@iconscout/react-unicons/icons/uil-discord";

var Impl = {};

function Discord(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilDiscord, tmp);
}

var make = React.memo(Discord);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
