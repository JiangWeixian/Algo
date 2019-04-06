const phone = [
  [''],
  [''],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]
/**
 * 这里唯一可以学到知识点就是递归了。234是用2拼接34，34是3拼接4。很明显的当前步骤需要
 * 上一步的结果
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 1) {
    return phone[Number(digits)]
  }
  if (digits.length === 0) {
    return []
  }

  // 递归：当前数字拼接上一步并返回
  let prev = letterCombinations(digits.slice(1))
  return phone[Number(digits[0])].reduce((acc, cur) => {
    let current = prev.map((pre) => {
      return cur + pre
    })
    return acc.concat(current)
  }, [])
};

console.log(letterCombinations('23'))