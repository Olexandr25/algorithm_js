let array = [6, 5, 3, 1, 8, 7, 2, 4, 10, 15]

const merge = (left, right) => {
  let arr = []

  while (left.length && right.length){
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right]
}


const mergeSort = (arr) => {
  const half = arr.length / 2

  if (arr.length <= 1){
    return arr
  }

  const left = arr.splice(0, half)
  console.log("Left: ", left)
  console.log("arr: ", arr)

  return merge(mergeSort(left), mergeSort(arr))
}


console.log(mergeSort(array))