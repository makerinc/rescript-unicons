// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilImageAltSlash from "@iconscout/react-unicons/icons/uil-image-alt-slash";

var Impl = {};

function ImageAltSlash(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilImageAltSlash, tmp);
}

var make = React.memo(ImageAltSlash);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
