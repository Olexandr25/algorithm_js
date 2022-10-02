const pascalTriangle = number => {
  const currentLine = [1]
  const currentLineLength = number + 1

  for (let i = 1; i < currentLineLength; i++) {
    currentLine[i] = (currentLine[i - 1] * (number - i + 1)) / i
  }

  return currentLine
}

console.log(pascalTriangle(11))

// TODO: repeat this algorithm
