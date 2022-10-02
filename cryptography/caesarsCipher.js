const caesarsCipher = str => {
  let value = ''
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i)
    console.log(ascii)
    if (ascii >= 65 && ascii <= 77){
        value += String.fromCharCode(ascii + 13)
    } else if (ascii >= 78 && ascii <= 90){
        value += String.fromCharCode(ascii - 13)
    } else {
        value += ' '
    }
  }

  return value
}

const text = 'FREE CODE CAMP'

console.log(caesarsCipher('A'))
console.log(caesarsCipher(text))
