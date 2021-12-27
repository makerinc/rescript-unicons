// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMedicalSquareFull from "@iconscout/react-unicons/icons/uil-medical-square-full";

var Impl = {};

function MedicalSquareFull(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMedicalSquareFull, tmp);
}

var make = React.memo(MedicalSquareFull);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
