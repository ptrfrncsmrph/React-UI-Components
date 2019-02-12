import React from "react"
import "./Button.css"

const NumberButton = ({ number, style }) => (
  <button className={style}>{number}</button>
)

export default NumberButton
