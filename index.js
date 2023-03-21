function spinWords(string) {
  let sentence = ''
  let splittedStr = string.split(' ')
  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i].length < 5) {
      sentence += splittedStr[i] + ' '
    } else {
      sentence += splittedStr[i].split('').reverse().join('') + ' '
    }
  }
  return sentence.trimEnd()
}