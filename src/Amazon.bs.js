// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilAmazon from "@iconscout/react-unicons/icons/uil-amazon";

var Impl = {};

function Amazon(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilAmazon, tmp);
}

var make = React.memo(Amazon);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
