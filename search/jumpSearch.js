const jumpSearch = (sortedArray, seekElement) => {
  const sortedArrayLength = sortedArray.length
  const jumpSize = Math.floor(Math.sqrt(sortedArrayLength))

  let blockStart = 0
  let blockEnd = jumpSize

  while (sortedArray[Math.min(blockEnd, sortedArrayLength) - 1] < seekElement) {
    blockStart = blockEnd
    blockEnd += jumpSize

    if (blockStart >= sortedArrayLength) return -1
  }

  while (arr[blockStart] < seekElement) {
    blockStart++

    if (blockStart == Math.min(blockEnd, sortedArrayLength)) return -1
  }

  if (arr[blockStart] == seekElement) return blockStart
  else return -1
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
console.log(jumpSearch(arr, 15))
console.log(jumpSearch(arr, 4))
