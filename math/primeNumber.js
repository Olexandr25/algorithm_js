const primeNumber = n => {
  if (n <= 2) return `${n} is not a prime number`

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`
    }
  }

  return `${n} is a prime number!`
}

console.log(primeNumber(1))
console.log(primeNumber(2))
console.log(primeNumber(5))
console.log(primeNumber(10))
console.log(primeNumber(17))
