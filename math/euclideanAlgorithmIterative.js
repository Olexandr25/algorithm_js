/**
 * "While a and b are both greater than zero and a is not equal to b, subtract the smaller of a and b
 * from the larger of a and b and reassign the result to the larger of a and b."
 *
 * The function starts by assigning the absolute value of numberA to a and the absolute value of
 * numberB to b
 * @param numberA - The first number to find the GCD of.
 * @param numberB - The second number to find the GCD of.
 * @returns The greatest common divisor of the two numbers.
 */
const euclideanAlgorithmIterative = (numberA, numberB) => {
  let a = Math.abs(numberA)
  let b = Math.abs(numberB)

  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a]
  }

  return a || b
}

console.log(euclideanAlgorithmIterative(15, 40))
