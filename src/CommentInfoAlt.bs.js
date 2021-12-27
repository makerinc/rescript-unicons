// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCommentInfoAlt from "@iconscout/react-unicons/icons/uil-comment-info-alt";

var Impl = {};

function CommentInfoAlt(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCommentInfoAlt, tmp);
}

var make = React.memo(CommentInfoAlt);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
