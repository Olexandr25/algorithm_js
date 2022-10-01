let arr = [1, 5, 29, 0, 1, -5, -17, 55, 29, 95, -98, -9, 1, 5, 15]
let count = 0

const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count++
    }
    [array[indexMin], array[i]] = [array[i], array[indexMin]]
  }

  return array
}

console.log(selectionSort(arr))
console.log(count)
