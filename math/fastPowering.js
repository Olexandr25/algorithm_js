const isPowerOfTwo = number => {
  if (number < 1) {
    return false
  }

  let dividerNumber = number
  while (dividerNumber !== 1) {
    if (dividerNumber % 2 !== 0) {
      return false
    }
    dividerNumber /= 2
  }

  return true
}

console.log(isPowerOfTwo(16))

// TODO: understand this better
