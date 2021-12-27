// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilUpload from "@iconscout/react-unicons/icons/uil-upload";

var Impl = {};

function Upload(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilUpload, tmp);
}

var make = React.memo(Upload);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
