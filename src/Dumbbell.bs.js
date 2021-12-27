// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilDumbbell from "@iconscout/react-unicons/icons/uil-dumbbell";

var Impl = {};

function Dumbbell(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilDumbbell, tmp);
}

var make = React.memo(Dumbbell);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
