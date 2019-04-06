/**
 * 找到字符串数组的最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0]
  }
  if (strs.length === 0) {
    return ''
  }
  const minLen = Math.min.apply(null, strs.map((item) => { return item.length }))
  let start = 1
  let maxCommon = ''

  while (start <= minLen) {
    let tmpCommon = strs[0].slice(0, start)
    // 判断新的common是否是所有元素前缀
    let isCommon = strs.every((item) => {
      return item.startsWith(tmpCommon)
    })
    if (isCommon) {
      // 如果是的话判断下移指针
      // 并且更新maxCommon
      start += 1
      maxCommon = tmpCommon
    } else {
      // 如果不是就返回上一个
      return maxCommon
    }
  }
  return maxCommon
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

console.log(longestCommonPrefix(["c","c"]))
