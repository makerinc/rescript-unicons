// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFootballBall from "@iconscout/react-unicons/icons/uil-football-ball";

var Impl = {};

function FootballBall(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFootballBall, tmp);
}

var make = FootballBall;

export {
  Impl ,
  make ,
  
}
/* react Not a pure module */