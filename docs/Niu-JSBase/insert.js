function insert (arr, item, index) {
  let newarr = [].concat(arr)
  newarr.splice(index, 0, item)
  return newarr
}

console.log(insert([1, 2, 3, 4], 'z', 2))
