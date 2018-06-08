function jumpRiver (n, arr) {
  let steps = 0
  let i
  for (i = 0; i < n;) {
    if (arr[i] >= n - i) {
      steps += 1
      n = i
      i = 0
    } else {
      i += 1
    }
  }
  return n !== 0 ? -1 : steps
}

console.log(jumpRiver(5, [1, 0, 1, 1, 1]))
console.log(jumpRiver(5, [2, 0, 1, 1, 1]))
console.log(jumpRiver(39, [3, 6, 6, 6, 3, 8, 9, 8, 5, 2, 9, 7, 3, 6, 5, 4, 2, 3, 6, 9, 9, 8, 6, 4, 1, 0, 4, 4, 8, 9, 3, 6, 0, 7, 8, 1, 1, 8, 4]))
