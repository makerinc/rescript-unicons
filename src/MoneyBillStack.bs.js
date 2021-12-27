// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilMoneyBillStack from "@iconscout/react-unicons/icons/uil-money-bill-stack";

var Impl = {};

function MoneyBillStack(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilMoneyBillStack, tmp);
}

var make = React.memo(MoneyBillStack);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
