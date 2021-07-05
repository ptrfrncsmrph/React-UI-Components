import React from "react"
import "./Button.css"

const NumberButton = ({ number, styleName }) => (
  <button className={styleName}>{number}</button>
)

export default NumberButton
