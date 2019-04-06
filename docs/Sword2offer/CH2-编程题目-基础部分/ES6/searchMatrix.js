let quickSearch = function (arr, target) {
  let rows = arr.length,
    cols = arr[0].length
  let start = 0,
    end = cols - 1
  // 关键在于每次选择缩小范围后的右上角数字
  while (start < rows && end > -1) {
    if (arr[start][end] > target) {
      // 如果大于就右移指针
      end -= 1
    } else if (arr[start][end] < target) {
      // 如果小于就下移指针
      start += 1
    } else {
      return true
    }
  }

}

let arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]]

console.log(quickSearch(arr, 2))
