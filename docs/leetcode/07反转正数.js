/**
 * 转化为字符串，注意范围以及首字母为0的时候
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const result = []
  let isNeg = (x / Math.abs(x)) < 0
  let strX = Math.abs(x).toString()

  for (let i = strX.length - 1; i >= 0; i --) {
    if (result.length === 0) {
      if (strX[i] !== '0') {
        result.push(strX[i])
      }
    } else {
      result.push(strX[i])
    }
  }

  let numResult = Number(result.join(''))
  if (isNeg) {
    return numResult > Math.pow(2, 31)? 0:-1*numResult
  } else {
    return numResult > Math.pow(2, 31) - 1? 0:numResult
  }
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
