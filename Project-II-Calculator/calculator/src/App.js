import React from "react"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import OperationButton from "./components/ButtonComponents/OperationButton"
import ClearButton from "./components/ButtonComponents/ClearButton"

import { range } from "./lib"

import "./App.css"

// Just declaring these here and leaving them as undefined
// I think I'll want to represent each as a type later
let Add, Sub, Mul, Div, Eq

const Operation = (type, sym) => ({ type, sym })
const AddOp = Operation(Add, "+")
const SubOp = Operation(Sub, "-")
const MulOp = Operation(Mul, "*")
const DivOp = Operation(Div, "/")
const EqOp = Operation(Eq, "=")
const operations = [AddOp, SubOp, MulOp, DivOp, EqOp]

const App = () => {
  return (
    <div className="grid-container">
      <CalculatorDisplay buffer={0} />
      <ClearButton />
      <div className="operations">
        {operations.map(op => (
          <OperationButton {...op} />
        ))}
      </div>
      <div className="numbers">
        {range(0, 9)
          .reverse()
          .map(n => (
            <NumberButton number={n} />
          ))}
      </div>
    </div>
  )
}

export default App
