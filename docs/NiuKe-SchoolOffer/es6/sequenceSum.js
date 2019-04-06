function sequenceSum (base, num) {
  let sumArr = [base]
  let sum = 0
  if (num >= 2) {
    Array(num - 1).fill(0).forEach((item, index) => {
      let pre = sumArr[index]
      sumArr.push(Math.sqrt(pre))
    })
  }
  sum = sumArr.reduce((acc, value) => {
    return acc + value
  })
  return sum.toFixed(2)
}

console.log(sequenceSum(81, 4))
console.log(sequenceSum(2, 2))
