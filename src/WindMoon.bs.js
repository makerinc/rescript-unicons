// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilWindMoon from "@iconscout/react-unicons/icons/uil-wind-moon";

var Impl = {};

function WindMoon(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilWindMoon, tmp);
}

var make = React.memo(WindMoon);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
