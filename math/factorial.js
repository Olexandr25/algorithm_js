const factorial = number => {
  let result = 1

  for (let j = 2; j <= number; j++) {
    result = result * j
  }

  return result
}

console.log(factorial(0))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))
