// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import UilCommentSearch from "@iconscout/react-unicons/icons/uil-comment-search";

var Impl = {};

function CommentSearch(Props) {
  var className = Props.className;
  var size = Props.size;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = className;
  }
  if (size !== undefined) {
    tmp.size = size;
  }
  return React.createElement(UilCommentSearch, tmp);
}

var make = React.memo(CommentSearch);

export {
  Impl ,
  make ,
  
}
/* make Not a pure module */
