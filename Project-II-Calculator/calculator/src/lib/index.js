export const range = (a, b, acc = []) => {
  if (a >= b + 1) return acc
  return range(a + 1, b, [...acc, a])
}
export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
export const reverse = x => x.reverse()
export const map = f => x => x.map(f)

export const add = x => y => x + y
export const sub = x => y => x - y
export const div = x => y => x / y
export const mul = x => y => x * y
export const k = x => _ => x
