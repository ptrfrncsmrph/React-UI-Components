import React, { Component, Fragment } from "react"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from "./components/ButtonComponents/NumberButton"
import OperationButton from "./components/ButtonComponents/OperationButton"
import ClearButton from "./components/ButtonComponents/ClearButton"

import { range, compose, add, sub, mul, div, id } from "./lib"
import { cata, interpret, interpretVerbose } from "./f-algebra"
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
const EqOp = Operation(Eq, id, "=")
const operations = [DivOp, MulOp, SubOp, AddOp, EqOp]

class App extends Component {
  state = {
    buffer: "0",
    computation: id
  }
  appendToBuffer = c => {
    this.setState(({ buffer }) => ({ buffer: buffer === "0" ? c : buffer + c }))
  }
  clearBuffer = () => {
    this.setState(() => ({ buffer: "0" }))
  }
  execBuffer = fn => {
    this.setState(({ buffer, computation }) => ({
      buffer: "0",
      computation: compose(fn(Number(buffer), computation))
    }))
  }
  evaluate = () => {}
  render() {
    const { buffer } = this.state
    return (
      <Fragment>
        <div className="grid-container">
          <CalculatorDisplay buffer={buffer} />
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
        <div className="state-display">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Fragment>
    )
  }
}

export default App
