// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPhoneVolume from "@iconscout/react-unicons/icons/uil-phone-volume";

var Impl = {};

function PhoneVolume(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPhoneVolume, tmp);
}

var make = PhoneVolume;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */