// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilServerNetwork from "@iconscout/react-unicons/icons/uil-server-network";

var Impl = {};

function ServerNetwork(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilServerNetwork, tmp);
}

var make = React.memo(ServerNetwork);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
