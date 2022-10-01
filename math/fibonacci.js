const fibonacci = n => {
  let arr = [1]
  if (n === 1) return arr

  let current = 1
  let prev = 0
  let iterator = n - 1

  while (iterator) {
    current = current + prev
    prev = current - prev
    arr.push(current)
    iterator--
  }

  return arr
}

console.log(fibonacci(10))
