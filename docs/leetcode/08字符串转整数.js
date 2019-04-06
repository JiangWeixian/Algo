/**
 * 去掉首尾空格，字符串必须以`-|\d`结尾才能够得到数字。注意转化后的数据范围
 * 不超过32位数据
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let trimStr = str.trim()
  let regex = /^(-\d+|\d+|\+\d+)/
  let match = regex.exec(trimStr)

  if (match) {
    let i = Number(match[1])
    let range = Math.pow(2, 31)
    if (i < -range) {
      return -range
    }
    if (i > range - 1) {
      return range - 1
    }
    return i
  }
  return 0
};

console.log(myAtoi('42'))
console.log(myAtoi('   -42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('3.14'))
console.log(myAtoi('+1'))