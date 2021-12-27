// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilBlogger from "@iconscout/react-unicons/icons/uil-blogger";

var Impl = {};

function Blogger(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilBlogger, tmp);
}

var make = React.memo(Blogger);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
