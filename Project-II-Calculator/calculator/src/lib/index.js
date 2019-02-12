export const range = (a, b, acc = []) => {
  if (a >= b + 1) return acc
  return range(a + 1, b, [...acc, a])
}
export const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
export const reverse = x => x.reverse()
export const map = f => x => x.map(f)
