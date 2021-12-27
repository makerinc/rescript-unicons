// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCloudRain from "@iconscout/react-unicons/icons/uil-cloud-rain";

var Impl = {};

function CloudRain(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCloudRain, tmp);
}

var make = React.memo(CloudRain);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
