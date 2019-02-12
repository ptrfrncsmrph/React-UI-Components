import React from "react"
import "./Button.css"

const NumberButton = ({ number, styleName, handleClick }) => (
  <button onClick={handleClick} className={styleName}>
    {number}
  </button>
)

export default NumberButton
