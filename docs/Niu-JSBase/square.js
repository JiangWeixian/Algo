function square (arr) {
  let newArr = arr.map(function (ele, index) {
    return ele * ele
  })
  return newArr
}

console.log(square([1, 2, 3, 4]))
