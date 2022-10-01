const squareRoot = (number, tolerance = 0) => {
  if (number <= 0) {
    return 0
  }

  let root = 1

  let requiredDelta = 1 / 10 ** tolerance

  while (Math.abs(number - root ** 2) > requiredDelta) {
    root -= (root ** 2 - number) / (2 * root)
  }

  return Math.round(root * 10 ** tolerance) / 10 ** tolerance
}

console.log(squareRoot(1, 2))
console.log(squareRoot(2, 2))
console.log(squareRoot(3, 2))
console.log(squareRoot(5, 2))
console.log(squareRoot(10))
