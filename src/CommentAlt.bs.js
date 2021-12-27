// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCommentAlt from "@iconscout/react-unicons/icons/uil-comment-alt";

var Impl = {};

function CommentAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCommentAlt, tmp);
}

var make = React.memo(CommentAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
