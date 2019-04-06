function truncate (arr) {
  let truncate = [].concat(arr)
  truncate.pop()
  return truncate
}

console.log(truncate([1, 2, 3, 4]))
