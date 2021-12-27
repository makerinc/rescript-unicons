// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilClipboardBlank from "@iconscout/react-unicons/icons/uil-clipboard-blank";

var Impl = {};

function ClipboardBlank(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilClipboardBlank, tmp);
}

var make = React.memo(ClipboardBlank);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
