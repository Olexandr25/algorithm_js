const fisherYates = originalArray => {
  const copyArray = originalArray.slice(0)

  for (let i = copyArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[randomIndex]] = [copyArray[randomIndex], copyArray[i]]
  }

  return copyArray
}


console.log(fisherYates([1,2,3,4,5,6,7,8,9,10]))