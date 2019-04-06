function captureThreeNumbers (str) {
  var reg = /([0-9]){3}/
  return reg.test(str) ? str.match(reg)[0] : false
}

console.log(captureThreeNumbers('98'))
