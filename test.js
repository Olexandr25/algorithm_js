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
let arrSorted = [-17, -5, -9, -98, 0, 1, 1, 1, 15, 29, 29, 5, 5, 55, 95]
let arr2 = [30, 0, -5, 101, -500, 404]
let arr2Sorted = [-5, -500, 0, 101, 30, 404]
let arr3 = [1, 5, 29, 0, 1, -5, 5, 5, 20, 3, 3, 10, 29, 5, 6]
let arr3Sorted = [-5, 0, 1, 1, 3, 3, 5, 5, 5, 5, 6, 10, 20, 29, 29]

const polynome = (arr, xValue) => arr.reduce((v1, v2) => v1 * xValue + v2, 0)
const classicPolynome = (arr, xValue) =>
  arr.reverse().reduce((v1, v2, index) => v1 + v2 * xValue ** index, 0)

// const componentWiseOperation = (func, { rows }) => {
//   const newRows = rows.map((row, i) =>
//     rows.map((element, j) => func(rows[i][j], element))
//   )

//   return newRows
// }
// const addMatrix = other => {
//   console.log('addMatrix: ', other)
//   return componentWiseOperation((a, b) => a + b, other)
// }

// const one = [
//   [1, 2],
//   [3, 4],
// ]

// const other = [
//   [5, 6],
//   [7, 8],
// ]

// console.log(one.add(other))

class Matrix {
  constructor(rows) {
    this.rows = rows
  }
  // ...
  componentWiseOperation(func, { rows }) {
    const newRows = rows.map((row, i) =>
      row.map((element, j) => {
        console.log("rows[i][j]: ", rows[i][j])
        console.log("i: ", i)
        console.log("j: ", j)
        return func(this.rows[i][j], element)
      })
    )
    return newRows
  }
  add(other) {
    return this.componentWiseOperation((a, b) => a + b, other)
  }
  subtract(other) {
    return this.componentWiseOperation((a, b) => a - b, other)
  }
}

const one = new Matrix([
  [1, 2],
  [3, 4],
])
const other = new Matrix([
  [5, 6],
  [7, 8],
])

console.log(one.add(other))
// Matrix { rows: [ [ 6, 8 ], [ 10, 12 ] ] }
console.log(other.subtract(one))
// Matrix { rows: [ [ 4, 4 ], [ 4, 4 ] ] }
