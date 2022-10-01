const powerSet = originalArray => {
  const globalArray = []

  const powerNumber = 2 ** originalArray.length

  for (let i = 0; i < powerNumber; i++) {
    const localArray = []

    for (let j = 0; j < originalArray.length; j++) {
      if (i & (1 << j)) {
        localArray.push(originalArray[j])
      }
    }

    globalArray.push(localArray)
  }

  return globalArray
}

console.log(powerSet(['a','b','c']))