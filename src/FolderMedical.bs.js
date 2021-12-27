// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilFolderMedical from "@iconscout/react-unicons/icons/uil-folder-medical";

var Impl = {};

function FolderMedical(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilFolderMedical, tmp);
}

var make = React.memo(FolderMedical);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
