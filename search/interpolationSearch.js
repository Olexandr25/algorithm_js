const interpolationSearch = (sortedArray, seekElement) => {
  let leftIndex = 0
  let rightIndex = sortedArray.length - 1

  while (leftIndex <= rightIndex) {
    let rangeDelta = sortedArray[leftIndex] - sortedArray[rightIndex]
    let indexDelta = leftIndex - rightIndex
    let valueDelta = seekElement - sortedArray[leftIndex]

    if (valueDelta < 0) return -1

    if (!valueDelta) {
      return sortedArray[leftIndex] === seekElement ? leftIndex : -1
    }

    const middleIndex =
      leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta)

    if (sortedArray[middleIndex] === seekElement) return middleIndex

    if (sortedArray[middleIndex] < seekElement) {
      leftIndex = middleIndex + 1
    } else {
      leftIndex = middleIndex - 1
    }
  }
}

console.log(
  interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 700)
)
console.log(
  interpolationSearch([1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], 300)
)
