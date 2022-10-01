const hornerMethod = (arr, xVar) => {
  return arr.reduce(
    (prevElement, nextElement) => prevElement * xVar + nextElement,
    0
  )
}

const classicPolynome = (arr, xVar) => {
  return arr
    .reverse()
    .reduce(
      (prevElement, nextElement, index) =>
        prevElement + nextElement * xVar ** index,
      0
    )
}

console.log(classicPolynome([1, 2, 3], 3))
