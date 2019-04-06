function convertToBinaryES6 (num) {
  let bitStr = num.toString(2)
  if (bitStr.length < 8) {
    return Array(8 - bitStr.length).fill(0).join('') + bitStr
  }
  return bitStr
}

console.log(convertToBinaryES6(65))

function convertToBinary (num) {
  var bitStr = num.toString(2),
    preArr = []
  if (bitStr.length < 8) {
    var preLen = 8 - bitStr.length
    while (preLen--) {
      preArr.push(0)
    }
  }
  return preArr.join('') + bitStr
}

console.log(convertToBinary(65))
