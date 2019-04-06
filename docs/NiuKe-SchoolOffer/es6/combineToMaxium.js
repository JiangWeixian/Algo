function combineToMaxium (arr) {
  let strArr = arr.map((item) => {
    return item.toString()
  })
  let sortedArr = strArr.sort(isBig)
  function isBig (a, b) {
    return a + b < b + a
  }
  return sortedArr.join('')
}

console.log(combineToMaxium([12, 123]))
