const SEPARATOR = '$'

const buildZArray = string => {
  const array = new Array(string.length).fill(null).map(() => 0)

  let leftIndex = 0
  let rightIndex = 0

  // Position of current zBox character that is also a position of
  // the same character in prefix.
  // For example:
  // Z string: ab$xxabxx
  // Indices:  012345678
  // Prefix:   ab.......
  // Z box:    .....ab..
  // Z box shift for 'a' would be 0 (0-position in prefix and 0-position in Z box)
  // Z box shift for 'b' would be 1 (1-position in prefix and 1-position in Z box)
  let boxShift = 0

  for (let charIndex = 1; charIndex < string.length; charIndex++) {
    if (charIndex > rightIndex) {
      leftIndex = charIndex
      rightIndex = charIndex

      while (
        rightIndex < string.length &&
        string[rightIndex - leftIndex] === string[rightIndex]
      ) {
        rightIndex++
      }

      array[charIndex] = rightIndex - leftIndex
      rightIndex--
    } else {
      boxShift = charIndex - leftIndex

      if (array[boxShift] < rightIndex - charIndex + 1) {
        array[charIndex] = array[boxShift]
      } else {
        leftIndex = charIndex

        while (
          rightIndex < string.length &&
          string[rightIndex - leftIndex] === string[rightIndex]
        ) {
          rightIndex++
        }

        array[charIndex] = rightIndex - leftIndex

        rightIndex--
      }
    }
  }

  return array
}

const zAlgorithm = (text, word) => {
  const wordPositions = []

  const zString = `${word}${SEPARATOR}${text}`

  const zArray = buildZArray(zString)

  console.log("zArray: ", zArray)

  for (let charIndex = 1; charIndex < zArray.length; charIndex++) {
    if (zArray[charIndex] === word.length) {
      const wordPosition = charIndex - word.length - SEPARATOR.length
      wordPositions.push(wordPosition)
    }
  }

  return wordPositions
}

console.log(zAlgorithm('abcbcglabcx', 'abc'))
