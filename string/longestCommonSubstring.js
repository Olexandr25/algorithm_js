const longestCommonSubstring = (string1, string2) => {
  const s1 = [...string1]
  const s2 = [...string2]

  const substringMatrix = Array(s2.length + 1)
    .fill(null)
    .map(() => {
      return Array(s1.length + 1).fill(null)
    })

  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex++) {
    substringMatrix[rowIndex][0] = 0
  }

  let longestSubstringLength = 0
  let longestSubstringColumn = 0
  let longestSubstringRow = 0

  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex++) {
    for (let columnIndex = 1; columnIndex <= s1.length; columnIndex++) {
      if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
        substringMatrix[rowIndex][columnIndex] =
          substringMatrix[rowIndex - 1][columnIndex - 1] + 1
      } else {
        substringMatrix[rowIndex][columnIndex] = 0
      }

      if (substringMatrix[rowIndex][columnIndex] > longestSubstringLength) {
        longestSubstringLength = substringMatrix[rowIndex][columnIndex]
        longestSubstringColumn = columnIndex
        longestSubstringRow = rowIndex
      }
    }
  }

  if (longestSubstringLength === 0) {
    // Longest common substring has not been found.
    return ''
  }

  let longestSubstring = ''
  while (substringMatrix[longestSubstringRow][longestSubstringColumn] > 0 ) {
    longestSubstring = s1[longestSubstringColumn - 1] + longestSubstring
    longestSubstringRow -= 1
    longestSubstringColumn -= 1
  }

  return longestSubstring
}

console.log(longestCommonSubstring('', ''))
console.log(longestCommonSubstring('ABC', ''))
console.log(longestCommonSubstring('', 'ABC'))
console.log(longestCommonSubstring('ABABC', 'BABCA'))
console.log(longestCommonSubstring('BABCA', 'ABCBA'))
