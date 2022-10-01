const cartesianProduct = (A, B) => {
  const product = []

  for (let indexA = 0; indexA < A.length; indexA++) {
    for (let indexB = 0; indexB < B.length; indexB++) {
        product.push([A[indexA], B[indexB]])
    }
  }

  return product
}


console.log(cartesianProduct([1, 2], [3, 5]))