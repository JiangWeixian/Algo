let printMatrix = (arr, callback) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return
  }
  let start = 0,
    rows = arr.length,
    cols = arr[0].length
  // 边界条件随便举例矩形就可以得到
  while (rows >= 2 * start && cols >= 2 * start) {
    // 打印好一圈之后,矩形上下左右都减少了2
    printMatrixInCircle(arr, start, rows - 2 * start, cols - 2 * start, callback)
    // 所有圈的起始点都在矩形的对角线上
    start += 1
  }
}

let printMatrixInCircle = (circle, start, rows, cols, callback) => {
  let colStart = start
  let colEnd = start + cols
  let rowStart = start
  let rowEnd = start + rows
  // 以顺时针顺序打印,至于每个判断条件可以试着举例不同类型矩形可以得到
  // 但是每种类型矩形需要都按照同一个原则
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

// 从右边到左边
let printColR2L = (circle, row, start, end, callback) => {
  if (start === end) {
    callback(circle[row][start])
  }
  for (let i = start; i > end; i--) {
    callback(circle[row][i])
  }
}

// 从下到上
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
