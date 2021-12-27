// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilPizzaSlice from "@iconscout/react-unicons/icons/uil-pizza-slice";

var Impl = {};

function PizzaSlice(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilPizzaSlice, tmp);
}

var make = React.memo(PizzaSlice);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
