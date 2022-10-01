/**
 * "If the second number is 0, return the first number, otherwise return the GCD of the second number
 * and the remainder of the first number divided by the second number."
 * 
 * The function uses recursion to find the GCD. It does this by continually calling itself with the
 * second number and the remainder of the first number divided by the second number until the second
 * number is equal to 0
 * @param numberA - The first number to be passed into the function.
 * @param numberB - The number that we are dividing into numberA.
 * @returns The greatest common divisor of two numbers.
 */
const euclideanAlgorithm = (numberA, numberB) => {
  const a = Math.abs(numberA)
  const b = Math.abs(numberB)
  console.log("a:", a)
  console.log("b:", b)
  console.log("********************************")

  return b === 0 ? a : euclideanAlgorithm(b, a % b)
}

console.log(euclideanAlgorithm(252, 105))
