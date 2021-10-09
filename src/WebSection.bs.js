// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilWebSection from "@iconscout/react-unicons/icons/uil-web-section";

var Impl = {};

function WebSection(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilWebSection, tmp);
}

var make = WebSection;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */