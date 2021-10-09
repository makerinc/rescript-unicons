// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilUserCircle from "@iconscout/react-unicons/icons/uil-user-circle";

var Impl = {};

function UserCircle(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilUserCircle, tmp);
}

var make = UserCircle;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */