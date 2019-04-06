/**
 * 我能想到的是O(n*n)复杂度的方法。类似冒泡排序的思路。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let len = height.length
  let maxSquare = 0

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let square = Math.min(height[i], height[j]) * (j - i)
      if (square > maxSquare) {
        maxSquare = square
      }
    }
  }

  return maxSquare
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
