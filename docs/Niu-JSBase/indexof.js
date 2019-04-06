function indexOf (arr, item) {
  for (var i = 0; i < arr.length; i++ ){
    if (arr[i] === item) {
      return i
    }
  }
  return -1
}

console.log(indexOf([ 1, 2, 3, 4 ], 5))

function indexOfES6 (arr, item) {
  return arr.findIndex((ele) => {
    return ele === item
  })
}

console.log(indexOfES6([ 1, 2, 3, 4 ], 5))

