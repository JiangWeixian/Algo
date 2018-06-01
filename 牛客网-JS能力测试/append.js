function append (arr, item) {
  var newarr = [].concat(arr)
  newarr.push(item)
  return newarr
}

console.log(append([1, 2, 3, 4], 10))

function appendES6 (arr, item) {
  let newarr = [].concat(arr)
  newarr.push(item)
  return newarr
}

console.log(appendES6([1, 2, 3, 4], 10))
