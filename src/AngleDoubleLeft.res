
module Impl = {
  @react.component
  @module("@iconscout/react-unicons/icons/uil-angle-double-left")
  external make: (~className: string=?, ~size:int=?) => React.element = "default"
}
  

@react.component
let make = (~className: option<string>=?, ~size: option<int>=?) => {
  <Impl ?className ?size />
}