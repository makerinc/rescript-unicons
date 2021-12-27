// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCloudDatabaseTree from "@iconscout/react-unicons/icons/uil-cloud-database-tree";

var Impl = {};

function CloudDatabaseTree(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCloudDatabaseTree, tmp);
}

var make = React.memo(CloudDatabaseTree);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
