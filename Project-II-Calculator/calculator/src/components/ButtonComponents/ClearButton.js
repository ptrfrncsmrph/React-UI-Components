import React from "react"
import "./Button.css"

const ClearButton = ({ handleClick }) => (
  <button onClick={handleClick} className="clear-button">
    Clear
  </button>
)

export default ClearButton
