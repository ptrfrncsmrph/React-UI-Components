import { compose, map } from "../lib"
import { Const, Add, Sub, Mul, Div } from "./types"

export const cata = f => x =>
  compose(
    f,
    map(cata(f))
  )(x)

export const interpret = a => {
  switch (a.constructor) {
    case Div:
      return a.x / a.y
    case Sub:
      return a.x - a.y
    case Mul:
      return a.x * a.y
    case Add:
      return a.x + a.y
    case Const:
      return a.value
  }
}

export const interpretVerbose = a => {
  switch (a.constructor) {
    case Div:
      return `${a.x} divided by ${a.y}`
    case Sub:
      return `${a.x} minus ${a.y}`
    case Mul:
      return `${a.x} times ${a.y}`
    case Add:
      return `${a.x} plus ${a.y}`
    case Const:
      return a.value
  }
}

const program = Mul.of(Add.of(Const.of(2), Const.of(3)), Const.of(4))

Mul.of(3) //?

const res = cata(interpret)(program)
const res_ = cata(interpretVerbose)(program)
