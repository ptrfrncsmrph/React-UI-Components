import React from "react"
import "./Button.css"

const OperationButton = ({ type, sym, styleName, handleClick }) => (
  <button onClick={handleClick} className={styleName}>
    {sym}
  </button>
)

export default OperationButton
