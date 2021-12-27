// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCompressArrows from "@iconscout/react-unicons/icons/uil-compress-arrows";

var Impl = {};

function CompressArrows(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCompressArrows, tmp);
}

var make = React.memo(CompressArrows);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
