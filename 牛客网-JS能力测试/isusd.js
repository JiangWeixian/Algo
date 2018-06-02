function isUSD (str) {
  var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
  return reg.test(str)
}
