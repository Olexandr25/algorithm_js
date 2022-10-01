let arr = [1, 5, 29, 0, 1, -5, -17, 55, 29, 95, -98, -9, 1, 5, 15]

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) { 
    let value = array[i] 
    let j = i - 1 
    while (j >= 0 && array[j] > value) { 
      array[j + 1] = array[j] 
      j = j - 1 
    }
    array[j + 1] = value
  }

  return array
}

console.log(insertionSort(arr))
console.log(count)