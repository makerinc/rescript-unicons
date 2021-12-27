// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilWall from "@iconscout/react-unicons/icons/uil-wall";

var Impl = {};

function Wall(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilWall, tmp);
}

var make = React.memo(Wall);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
