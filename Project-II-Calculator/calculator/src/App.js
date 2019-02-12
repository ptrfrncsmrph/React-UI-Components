import React, { Component } from "react"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import OperationButton from "./components/ButtonComponents/OperationButton"
import ClearButton from "./components/ButtonComponents/ClearButton"

import { range } from "./lib"
import { cata, interpret, interpretVerbose } from "./f-algebra"
import { Const, Add, Sub, Mul, Div } from "./f-algebra/types"

import "./App.css"

// Just declaring these here and leaving them as undefined
// I think I'll want to represent each as a type later
// let Add, Sub, Mul, Div, Eq
let Eq

const Operation = (type, sym) => ({ type, sym })
const AddOp = Operation(Add, "\u002B")
const SubOp = Operation(Sub, "\u2212")
const MulOp = Operation(Mul, "\u00D7")
const DivOp = Operation(Div, "\u00F7")
const EqOp = Operation(Eq, "=")
const operations = [DivOp, MulOp, SubOp, AddOp, EqOp]

class App extends Component {
  state = {
    buffer: "0",
    computation: undefined
  }
  render() {
    const { buffer } = this.state
    return (
      <div className="grid-container">
        <CalculatorDisplay buffer={buffer} />
        <ClearButton />
        <div className="operations">
          {operations.map(op => (
            <OperationButton styleName="operation-button" {...op} />
          ))}
        </div>
        <div className="numbers">
          {range(0, 9)
            .reverse()
            .map(n => (
              <NumberButton styleName="number-button" number={n} />
            ))}
        </div>
      </div>
    )
  }
}

export default App
