const weightedRandom = (items, weights) => {
  if (items.length !== weights.length || !items.length) {
    return false
  }

  const cumulativeWeights = []
  for (let i = 0; i < weights.length; i++) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0)
  }

  const maxCumulativeWeights = cumulativeWeights[cumulativeWeights.length - 1]
  const randomNumber = maxCumulativeWeights * Math.random()

  for (let i = 0; i < items.length; i++) {
    if (cumulativeWeights[i] >= randomNumber) {
      return {
        item: items[i],
        index: i,
      }
    }
  }
}

console.log(weightedRandom(['a', 'b', 'c'], [10, 4, 5]))
