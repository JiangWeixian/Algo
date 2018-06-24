let printMatrix = (arr, callback) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return
  }
  let start = 0,
    rows = arr.length,
    cols = arr[0].length
  while (rows >= 2 * start && cols >= 2 * start) {
    printMatrixInCircle(arr, start, rows - 2 * start, cols - 2 * start, callback)
    start += 1
  }
}

let printMatrixInCircle = (circle, start, rows, cols, callback) => {
  let colStart = start
  let colEnd = start + cols
  let rowStart = start
  let rowEnd = start + rows
  if (cols > 1) {
    printRowL2R(circle, rowStart, colStart, colEnd - 1, callback)
  }
  if (rows >= 1) {
    printColT2B(circle, colEnd - 1, rowStart, rowEnd - 1, callback)
  }
  if (cols >= 1 && rows > 1) {
    printColR2L(circle, rowEnd - 1, colEnd - 1, colStart, callback)
  }
  if (rows > 1 && cols > 1) {
    printColB2T(circle, colStart, rowEnd - 1, rowStart, callback)
  }
}

// 从左边向右边打印
let printRowL2R = (circle, row, start, end, callback) => {
  if (start === end) {
    callback(circle[row][start])
  }
  for (let i = start; i < end; i++) {
    callback(circle[row][i])
  }
}

// 从上到下
let printColT2B = (circle, col, start, end, callback) => {
  if (start === end) {
    callback(circle[start][col])
  }
  for (let i = start; i < end; i++) {
    callback(circle[i][col])
  }
}

let printColR2L = (circle, row, start, end, callback) => {
  if (start === end) {
    callback(circle[row][start])
  }
  for (let i = start; i > end; i--) {
    callback(circle[row][i])
  }
}

let printColB2T = (circle, col, start, end, callback) => {
  if (start === end) {
    callback(circle[start][col])
  }
  for (let i = start; i > end; i--) {
    callback(circle[i][col])
  }
}

console.log('rect matrix')
let rect = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
printMatrix(rect, function (value) {
  console.log(value)
})
console.log('onerow matrix')
let oneRow = [[1, 2, 3, 4]]
printMatrix(oneRow, function (value) {
  console.log(value)
})
console.log('onecol matrix')
let oneCol = [[1], [2], [3], [4]]
printMatrix(oneCol, function (value) {
  console.log(value)
})
console.log('rect matrix')
let unRect = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
printMatrix(unRect, function (value) {
  console.log(value)
})
