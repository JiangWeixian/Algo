function prepend (arr, item) {
  let newarr = [].concat(arr)
  newarr.unshift(item)
  return newarr
}

console.log(prepend([1, 2], 10))
