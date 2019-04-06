function remove (arr, item) {
  var newarr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      newarr.push(arr[i])
    }
  }
  return newarr
}

console.log(remove([1, 2, 3, 4, 2], 2))

function removeES6 (arr, item) {
  let newarr = arr.filter(function (ele) {
    return ele !== item
  })
  return newarr
}

console.log(removeES6([1, 2, 3, 4, 2], 2))
