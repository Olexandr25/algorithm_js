const euclideanAlgorithm = (numberA, numberB) => {
    let a = Math.abs(numberA)
    let b = Math.abs(numberB)
    console.log("********************************")
    console.log(a, b)

    return b === 0 ? a : euclideanAlgorithm(b, a % b)
}

const leastCommonMultiple = (a, b) => {
    return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a,b)
}

console.log(leastCommonMultiple(4, 6))
console.log('----------------------------------------------------------------')
console.log(leastCommonMultiple(1, 6))
console.log('----------------------------------------------------------------')
console.log(leastCommonMultiple(13, 125))
console.log('----------------------------------------------------------------')
console.log(leastCommonMultiple(18, 43))
console.log('----------------------------------------------------------------')
