import React, { Component, Fragment } from "react"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import OperationButton from "./components/ButtonComponents/OperationButton"
import ClearButton from "./components/ButtonComponents/ClearButton"

import { range, add, sub, mul, div, k } from "./lib"
// import { cata, interpret, interpretVerbose } from "./f-algebra"
import { Const, Add, Sub, Mul, Div } from "./f-algebra/types"

import "./App.css"

// Just declaring these here and leaving them as undefined
// I think I'll want to represent each as a type later
let Eq

const Operation = (type, fn, sym) => ({ type, fn, sym })
const AddOp = Operation(Add, add, "\u002B")
const SubOp = Operation(Sub, sub, "\u2212")
const MulOp = Operation(Mul, mul, "\u00D7")
const DivOp = Operation(Div, div, "\u00F7")
const EqOp = Operation(Eq, k, "=")
const operations = [DivOp, MulOp, SubOp, AddOp, EqOp]

const prettyPrint = x => Number(x).toLocaleString()

class App extends Component {
  state = {
    last: undefined,
    buffer: "0",
    computation: undefined
  }
  appendToBuffer = c => {
    this.setState(({ buffer }) => ({ buffer: buffer === "0" ? c : buffer + c }))
  }
  clearBuffer = () => {
    this.setState(() => ({ buffer: "0", last: "0" }))
  }
  execBuffer = fn => {
    this.setState(({ last, buffer, computation }) => ({
      buffer: "0",
      computation: fn,
      last: last ? computation(Number(last))(Number(buffer)) : buffer
    }))
  }
  render() {
    const { buffer, last } = this.state
    return (
      <div className="grid-container">
        <CalculatorDisplay
          buffer={prettyPrint(buffer === "0" && last ? last : buffer)}
        />
        <ClearButton handleClick={this.clearBuffer} />
        <div className="operations">
          {operations.map(({ sym, fn }) => (
            <OperationButton
              styleName="operation-button"
              sym={sym}
              handleClick={() => this.execBuffer(fn)}
            />
          ))}
        </div>
        <div className="numbers">
          {range(0, 9)
            .reverse()
            .map(n => (
              <NumberButton
                styleName="number-button"
                handleClick={() => this.appendToBuffer(String(n))}
                number={n}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default App
