/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = x.toString()
  let start = 0
  let end = str.length - 1
  
  while (end >= start) {
    if (str[end] === str[start]) {
      end -= 1
      start += 1
    } else {
      return false
    }
  }
  return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
