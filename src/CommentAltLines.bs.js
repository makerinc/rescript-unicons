// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCommentAltLines from "@iconscout/react-unicons/icons/uil-comment-alt-lines";

var Impl = {};

function CommentAltLines(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCommentAltLines, tmp);
}

var make = React.memo(CommentAltLines);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
