const countingSort = (arr, min, max) => {
  let i = min
  let j = 0
  let len = arr.length
  let count = []

  /* Initializing the count array with 0s. */
  for ( i; i <= max; i++){
    count[i] = 0
  }

  for ( i = 0; i < len; i++){
    count[arr[i]] += 1
  }

  for (i = min; i <= max; i++){
    while ( count[i] > 0) {
      arr[j] = i
      j++
      count[i]--
    }
  }

  return arr
}

const arr = [1,5,3,5,2,3,4,2,7,5,6,6,8,3,4]
console.log(countingSort(arr, 1, 8))