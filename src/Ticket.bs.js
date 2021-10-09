// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilTicket from "@iconscout/react-unicons/icons/uil-ticket";

var Impl = {};

function Ticket(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilTicket, tmp);
}

var make = Ticket;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */
