
module Impl = {
  @react.component
  @module("@iconscout/react-unicons/icons/uil-vertical-align-center")
  external make: (~className: string=?, ~size:int=?) => React.element = "default"
}
  

@react.component
let make = (~className: option<string>=?, ~size: option<int>=?) => {
  <Impl ?className ?size />
}
