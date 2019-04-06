/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!s && !p) {
    return true
  }
  let checkP = /([a-z\.\*])+/
  if (checkP.test(p)) {
    let regex = new RegExp(p)
    let match = regex.exec(s)
    if (match) {
      return match[0].length === s.length
    } else {
      return false
    }
  }
  return false
};
console.log(isMatch('', 'a'))
