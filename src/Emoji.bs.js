// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilEmoji from "@iconscout/react-unicons/icons/uil-emoji";

var Impl = {};

function Emoji(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilEmoji, tmp);
}

var make = Emoji;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */