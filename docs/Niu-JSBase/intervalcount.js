function count (start, end) {
  var interval = setInterval(function () {
    console.log(start++)
    if (start <= end) {
      console.log(start++)
    } else {
      clearInterval(interval)
    }
  }, 100)
  return {
    cancel: function () {
      clearInterval(interval)
    }
  }
}

count(2, 2)
