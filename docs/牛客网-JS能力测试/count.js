function count (arr, item) {
  var ctn = 0
  arr.forEach((function (ele) {
    if (ele === item) {
      ctn += 1
    }
  }))
  return ctn
}

console.log(count([1, 2, 4, 4, 3, 4, 3], 4))
