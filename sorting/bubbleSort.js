let arr = [1, 5, 29, 0, 1, -5, -17, 55, 29, 95, -98, -9, 1, 5, 15]
let arr2 = [30, 0, -5, 101, -500, 404]
let count = 0

const bubbleSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr2))
console.log(count)
