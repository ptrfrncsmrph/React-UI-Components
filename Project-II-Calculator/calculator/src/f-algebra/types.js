const util = require("util")

class Const {
  static of(x) {
    return new Const(x)
  }
  constructor(value) {
    this.value = value
  }
  map(_) {
    return this
  }
  [util.inspect.custom]() {
    return `Const(${this.value})`
  }
}

class Add {
  static of(x, y) {
    return new Add(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 0
  }
  map(f) {
    return Add.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Add(${this.x}, ${this.y})`
  }
}

class Mul {
  static of(x, y) {
    return new Mul(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 1
  }
  map(f) {
    return Mul.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Mul(${this.x}, ${this.y})`
  }
}

class Sub {
  static of(x, y) {
    return new Mul(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 0
  }
  map(f) {
    return Sub.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Sub(${this.x}, ${this.y})`
  }
}

class Div {
  static of(x, y) {
    return new Mul(x, y)
  }
  constructor(x, y) {
    this.x = x
    this.y = y || 1
  }
  map(f) {
    return Div.of(f(this.x), f(this.y))
  }
  [util.inspect.custom]() {
    return `Div(${this.x}, ${this.y})`
  }
}

export { Const, Add, Sub, Mul, Div }
