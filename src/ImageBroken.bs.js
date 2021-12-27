// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilImageBroken from "@iconscout/react-unicons/icons/uil-image-broken";

var Impl = {};

function ImageBroken(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilImageBroken, tmp);
}

var make = React.memo(ImageBroken);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
