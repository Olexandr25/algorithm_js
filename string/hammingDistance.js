const hammingDistance = (str1, str2) => {
  if (str1?.length !== str2?.length){
    return false
  }

  let distance = 0
  for (let i = 0; i < str1?.length; i++) {
    if (str1[i] !== str2[i]){
      distance++
    }
  }

  return distance
}

console.log(hammingDistance("qwerty", "ytrewq"))
console.log(hammingDistance("abcd", "asd"))
console.log(hammingDistance("abcd", "cccc"))