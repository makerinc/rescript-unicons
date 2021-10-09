// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilKeyboard from "@iconscout/react-unicons/icons/uil-keyboard";

var Impl = {};

function Keyboard(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilKeyboard, tmp);
}

var make = Keyboard;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
