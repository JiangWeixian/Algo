function curtail (arr) {
  let newarr = [].concat(arr)
  newarr.shift()
  return newarr
}

console.log(curtail([1, 2]))
