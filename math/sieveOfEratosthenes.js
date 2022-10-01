const sieveOfEratosthenes = maxNumber => {
  let array = new Array(maxNumber + 1).fill(true)
  array[0] = false
  array[1] = false

  let primeNumbers = []
  for (let number = 2; number <= maxNumber; number++) {
    if (array[number] === true) {
      primeNumbers.push(number)

      let nextNumber = number * number

      while (nextNumber <= maxNumber) {
        array[nextNumber] = false
        nextNumber += number
      }
    }
  }

  return console.log(primeNumbers)
}

sieveOfEratosthenes(15)
