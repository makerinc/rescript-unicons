// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilShoppingBag from "@iconscout/react-unicons/icons/uil-shopping-bag";

var Impl = {};

function ShoppingBag(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilShoppingBag, tmp);
}

var make = React.memo(ShoppingBag);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
