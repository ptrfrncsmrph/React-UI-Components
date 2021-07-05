import React from "react"
import "./Button.css"

const OperationButton = ({ type, sym, styleName }) => (
  <button className={styleName}>{sym}</button>
)

export default OperationButton
