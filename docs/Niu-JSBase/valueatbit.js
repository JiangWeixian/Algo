function valueAtBit (num, bit) {
  var numBit = num.toString(2)
  return numBit[numBit.length - bit]
}

console.log(valueAtBit(128, 8))
