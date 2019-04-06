/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    // 及时中断
    return s
  }
  let maxLen = 1
  let result = s[0]
  let len = s.length - 1

  // 检测长度为2的回文子串，每次尾指针都要初始化为最初
  for (let start = 0, end = len; start < len; start++, end = len) {
    // 左移尾指针直到start + maxLen，主要是为了减少循环
    while ((end - start + 1) > maxLen) {
      // 回文至少头尾相等
      if (s[end] === s[start]) {
        // 检测回文
        let subStr = s.slice(start, end + 1)
        let isPalindromic = checkPalindromic(subStr)
        if (isPalindromic) {
          // 更新结果(由于外部循环保证新的回文一定是大于旧回文长度，所以放心更新结果)
          maxLen = end - start + 1
          result = subStr
        }
      }
      end -= 1
    }
  }
  return result
};

var checkPalindromic = function (s) {
  let start = 0
  let end = s.length - 1

  while (end >= start) {
    if (s[end] === s[start]) {
      end -= 1
      start += 1
    } else {
      return false
    }
  }
  return true
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ac'))
console.log(longestPalindrome("aaabaaaa"))
console.log(longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"))
console.log(longestPalindrome("bb"))