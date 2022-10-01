const linearSearch = (seekElement, array) => {
  const found = []

  array.forEach((element, index)=>{
    if (element === seekElement){
      found.push(index)
    }
  })

  return found
}


const arr = [1,2,5,3,4,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
const el1 = 1
const el2 = 5
const el3 = 25

console.log(linearSearch(el1, arr))
console.log(linearSearch(el2, arr))
console.log(linearSearch(el3, arr))
