/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0
  }
  return curLongestSubstring(s, 0, 0, {}, 1)
};

/**
 * (用到了尾递归的优化，和思路无关)先找到初始化的最长子串，说明此时initE指向的字符
 * 和初始化的字符是重复的。**左移initS直到initS和initE之间子串不重复**。不重复之后，
 * 查找initE和s.length之间字符是否和initS直到initS和initE之间子串重复。
 * @param {*} s 和`lengthOfLongestSubstring`参数一致
 * @param {*} initS 最长子串起点
 * @param {*} initE 初始化的搜索位置，也是最长子串的终点
 * @param {*} initMap 保存是否含有重复字符
 * @param {*} initLen 初始化的最长子串长度
 */
var curLongestSubstring = function (s, initS = 0, initE = 0, initMap = {}, initLen = 1) {
  if (initE >= s.length - 1) {
    return Math.max((initE - initS), initLen)
  }
  let currentE = initE

  for (; currentE < s.length; currentE ++) {
    if (initMap[s[currentE]]) {
      // 右移initS，需要重置initMap相应位置。
      initMap[s[initS]] = false
      // 右移initS，同时从currentE找剩余部分。因为保证此时initS和currentE之间不重复
      // 如果重复，即使进入递归还是会右移initS
      // 每次要更新initLen为最大值
      return curLongestSubstring(s, initS + 1, currentE, initMap, Math.max((currentE - initS), initLen))
    }
    initMap[s[currentE]] = true
  }
  // 意味着没有重复的时候
  return Math.max((currentE - initS), initLen)
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('au'))
