// let arrayToSearch = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500]

// console.log('Found at position :' + jumpSearch(arrayToSearch, 2))
// console.log('Found at position :' + jumpSearch(arrayToSearch, 256))
// console.log('Found at position :' + jumpSearch(arrayToSearch, 500))
// console.log('Found at position :' + jumpSearch(arrayToSearch, 44444))

// function jumpSearch(arrayToSearch, valueToSearch) {
//   let length = arrayToSearch.length
//   let step = Math.floor(Math.sqrt(length))
//   let lowerBound = 0

//   while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
//     lowerBound = step
//     step += step
//     if (lowerBound >= length) {
//       return -1
//     }
//   }

//   let upperBound = Math.min(step, length)

//   while (arrayToSearch[lowerBound] < valueToSearch) {
//     lowerBound++
//     if (lowerBound == upperBound) {
//       return -1
//     }
//   }
//   if (arrayToSearch[lowerBound] == valueToSearch) {
//     return lowerBound
//   }
//   return -1
// }
// ----------------------------------------------------------------
// !

let arr = [1, 5, 29, 0, 1, -5, -17, 55, 29, 95, -98, -9, 1, 5, 15]
let arr2 = [30, 0, -5, 101, -500, 404]

const bubbleSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort(arr))
// ----------------------------------------------------------------
// !

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
// console.log(selectionSort(arr))
// ----------------------------------------------------------------
// !

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let prevElement = arr[i]
    let nextElement = i - 1

    while (nextElement >= 0 && arr[nextElement] > prevElement) {
      arr[nextElement + 1] = arr[nextElement]
      nextElement--
    }

    arr[nextElement + 1] = prevElement
  }

  return arr
}
// console.log(insertionSort(arr))
// ----------------------------------------------------------------
// !

const bs = arr => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = value
  }

  return arr
}

console.log(bubbleSort(arr))
