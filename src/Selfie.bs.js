// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilSelfie from "@iconscout/react-unicons/icons/uil-selfie";

var Impl = {};

function Selfie(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilSelfie, tmp);
}

var make = Selfie;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */