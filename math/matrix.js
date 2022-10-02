class Matrix {
  constructor(rows) {
    this.rows = rows
  }
  // ...
  componentWiseOperation(func, { rows }) {
    const newRows = rows.map((row, i) =>
      row.map((element, j) => func(this.rows[i][j], element))
    )
    return newRows
  }
  add(other) {
    console.log('adding: ', other)
    return this.componentWiseOperation((a, b) => a + b, other)
  }
  subtract(other) {
    return this.componentWiseOperation((a, b) => a - b, other)
  }
  scaleBy(number) {
    const newRows = this.rows.map(row =>
      row.map(element => element * number)
    )
    return newRows
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
console.log(one.scaleBy(2))
// Matrix { rows: [ [ 2, 4 ], [ 6, 8 ] ] }

