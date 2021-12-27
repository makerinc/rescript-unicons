// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCommentAltShare from "@iconscout/react-unicons/icons/uil-comment-alt-share";

var Impl = {};

function CommentAltShare(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCommentAltShare, tmp);
}

var make = React.memo(CommentAltShare);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
