const roman = {
  "I": "1",
  "V": "5",
  "X": "10",
  "L": "50",
  "C": "100",
  "D": "500",
  "M": "1000" 
}
/**
 * 求和函数
 * @param {Number[]} nums 
 */
var getSum = function (nums) {
  return nums.reduce(function (acc, cur) {
    return acc + cur
  })
}
/**
 * 罗马数字转化为数字。主要是分组，因为类似`IV`被减去的都是`I`。
 * 所以以连续的数字分组即可。
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let nums = s.split('').map((item) => {
    return Number(roman[item])
  })

  let len = nums.length
  let total = 0
  let start = 0
  let end = start
  
  while (end < len) {
    while (nums[end] === nums[start]) {
      end += 1
    }
    
    if (nums[end] > nums[start]) {
      total += nums[end] - getSum(nums.slice(start, end))
      start = end + 1
      end = start
    } else {
      total += getSum(nums.slice(start, end))
      start = end
    }
  }
  return total
};

console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('IX'))
console.log(romanToInt('III'))

