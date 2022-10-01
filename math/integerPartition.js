const integerPartition = number => {
  const partitionMatrix = Array(number + 1)
    .fill(null)
    .map(() => Array(number + 1).fill(null))

  for (let i = 0; i <= number; i++) {
    partitionMatrix[0][i] = 0
  }

  for (let i = 0; i <= number; i++) {
    partitionMatrix[i][0] = 1
  }

  for (let sumIndex = 1; sumIndex <= number; sumIndex++) {
    for (let numIndex = 1; numIndex <= number; numIndex++) {
      if (sumIndex > numIndex) {
        partitionMatrix[sumIndex][numIndex] =
          partitionMatrix[sumIndex - 1][numIndex]
      } else {
        const combosWithoutSummand = partitionMatrix[sumIndex - 1][numIndex]
        const combosWithSummand = partitionMatrix[sumIndex][numIndex - sumIndex]

        partitionMatrix[sumIndex][numIndex] =
          combosWithoutSummand + combosWithSummand
      }
    }
  }

  // console.log(partitionMatrix)

  return partitionMatrix[number][number]
}

console.log(integerPartition(1))
console.log(integerPartition(2))
console.log(integerPartition(3))
console.log(integerPartition(4))
console.log(integerPartition(20))
