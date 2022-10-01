const buildPatternTable = word => {
  const patternTable = [0]
  let prefixIndex = 0
  let suffixIndex = 1

  while (suffixIndex < word.length) {
    if (word[suffixIndex] === word[prefixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1
      prefixIndex++
      suffixIndex++
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = prefixIndex + 1
      suffixIndex++
    } else {
      prefixIndex = patternTable[suffixIndex - 1]
    }
  }

  return patternTable
}

const knuthMorrisPratt = (text, word) => {
  if (word?.length === 0) {
    return false
  }

  let textIndex = 0
  let wordIndex = 0

  const patternTable = buildPatternTable(word)

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      if (wordIndex === word.length - 1) {
        return textIndex - word.length + 1
      }
      wordIndex++
      textIndex++
    } else if (wordIndex > 0) {
        wordIndex = patternTable[wordIndex - 1]
    } else {
        textIndex++
    }
  }
  
  return -1
}

const text = 'abcbcglx'

const word = 'c'
var test = 'potential';

var string = "This fact implies that the loop can execute at most 2n times. For, in each iteration, it " +
    "executes one of the two branches in the loop. The first branch invariably increases i and does not " +
    "change m, so that the index m + i of the currently scrutinized character of S is increased. The second " +
    "branch adds i - T[i] to m, and as we have seen, this is always a positive number. Thus the location m " +
    "of the beginning of the current potential match is increased. Now, the loop ends if m + i = n; " +
    "therefore each branch of the loop can be reached at most k times, since they respectively increase " +
    "either m + i or m, and m = m + i: if m = n, then certainly m + i = n, so that since it increases by " +
    "unit increments at most, we must have had m + i = n at some point in the past, and therefore either " +
    "way we would be done.";

console.log(knuthMorrisPratt(text, word))
console.log(knuthMorrisPratt(string, test))


// ? Second variant of algorithm
const strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substr(i, needle.length) === needle) return i;
    }
    return -1;
};

console.log(strStr(text, word))
console.log(strStr(string, test))