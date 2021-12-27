// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";

var Impl = {};

function UsersAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilUsersAlt, tmp);
}

var make = React.memo(UsersAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
