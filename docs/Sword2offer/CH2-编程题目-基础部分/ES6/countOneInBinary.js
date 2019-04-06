let countOne = function (num) {
  let bin = num.toString(2)
  let count = 0
  bin.split('').forEach((item) => {
    if (item === '1') {
      count += 1
    }
  })
  return count
}

console.log(countOne(9))
