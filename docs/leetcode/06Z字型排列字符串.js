/**
 * 将字符串Z字型排列
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) {
    return s
  }
  const results = []
  // 以 2 * numRows - 2个一组读取数据
  const circle = 2 * numRows - 2

  let start = 0
  let circleCount = 0
  let len = s.length

  // 初始化Z字型数组
  for (let i = 0; i < numRows; i++) {
    results.push([])
  }

  // Z字形是以 2 * numRows - 2个一组读取数据
  while (start < len) {
    if (start % circle === 0) {
      circleCount = 0
    }
    // 前numRows个数据行数递增
    if (circleCount < numRows) {
      results[circleCount].push(s[start])
    } else {
      // 后面numRows - 2 * numRows - 2之间行数递减
      // 由于从题目可以得到是一个系数矩阵，所以直接push即可，不需要考虑元素(i, j)下标
      let row = numRows - 1 - (circleCount % (numRows - 1))
      results[row].push(s[start])
    }
    start += 1
    circleCount += 1
  }

  return results.reduce((acc, cur) => {
    return acc + cur.join('')
  }, '')
};


// console.log(convert('PAYPALISHIRING', 3))
// console.log(convert('PAYPALISHIRING', 4))
console.log(convert('AB', 1))