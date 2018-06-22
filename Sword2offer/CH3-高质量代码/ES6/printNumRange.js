let range = function () {
  let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  function getRange (n) {
    if (n === 1) {
      return nums
    }
    let currentCount = n - 1
    let currentRange = []
    if (n >= 1) {
      let lastRange = getRange(currentCount)
      currentRange = nums.map((pre) => {
        return lastRange.map((tail) => {
          return pre + tail
        })
      })
      currentRange = currentRange.reduce((acc, value) => {
        return acc.concat(value)
      })
    }
    return currentRange
  }
  return function (n) {
    return getRange(n)
  }
}

let ranger = range()
console.log(ranger(3))
