const trialDivision = n => {
  if (n % 1 !== 0) {
    return false
  }
  // number is not trialDivision
  if (n <= 1) {
    return false
  }
  // number [2,3] is always trialDivision
  if (n <= 3) {
    return true
  }

  // it's not primarily number
  if (n % 2 === 0) {
    return false
  }

  let mathSqrt = Math.sqrt(n)
  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

console.log(trialDivision(1)) // false
console.log(trialDivision(2)) // true
console.log(trialDivision(3)) // true
console.log(trialDivision(6)) // false
console.log(trialDivision(9)) // false
console.log(trialDivision(11)) // true
