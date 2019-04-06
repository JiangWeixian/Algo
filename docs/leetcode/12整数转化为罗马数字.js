const roman = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M" 
}
/**
 * 根据基数转化为对应罗马数字。例如基数等于1，就是10以内罗马数字转化
 * @param {number} num 
 * @param {number} base 
 */
var getRoman = function (num, base) {
  let upperRoman = roman[String(base * 10)]
  let lowerRoman = roman[String(base)]
  let midRoman = roman[String(base * 5)]

  if (num <= 3) {
    return lowerRoman.repeat(num)
  }
  if (num < 5) {
    return lowerRoman + midRoman
  }
  if (num === 5) {
    return midRoman
  }
  if (num <= 8) {
    return midRoman + lowerRoman.repeat(num - 5)
  }
  return lowerRoman + upperRoman
}
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num > 3999) {
    return null
  }
  let len = num.toString().length - 1
  let result = ''

  while (num) {
    let exp = Math.pow(10, len)
    let quotient = Math.floor(num / exp)
    num = num % exp
    
    if (len === 3) {
      result = roman[String(exp)].repeat(quotient)
    } else {
      result += getRoman(quotient, exp)
    }
    len = len - 1
  }
  return result
};

console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))
console.log(intToRoman(31))
