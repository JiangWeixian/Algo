function reverseSentence (str) {
  let arr = str.split(' ')
  let word = ''
  let rArr = []
  while (word = arr.pop()) {
    rArr.push(word)
  }
  return rArr.join(' ')
}

console.log(reverseSentence('hello xiao mi'))
