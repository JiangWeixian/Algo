function phoneAlias (str) {
  let map = {
    Z: {num: 0, cnt: 0}, // 0
    W: {num: 2, cnt: 0}, // 2
    U: {num: 4, cnt: 0}, // 4
    X: {num: 6, cnt: 0}, // 6
    G: {num: 8, cnt: 0}, // 8
    O: {num: 1, cnt: 0}, // 1
    T: {num: 3, cnt: 0}, // 3
    F: {num: 5, cnt: 0}, // 5
    S: {num: 7, cnt: 0}, // 7
    I: {num: 9, cnt: 0} // 9
  }
  let phone = []
  str.split('').forEach((item) => {
    if (map.hasOwnProperty(item)) {
      map[item].cnt += 1
    }
  })
  map['O'].cnt = map['O'].cnt - map['Z'].cnt - map['U'].cnt - map['W'].cnt
  map['T'].cnt = map['T'].cnt - map['W'].cnt - map['G'].cnt
  map['F'].cnt = map['U'].cnt
  map['S'].cnt = map['S'].cnt - map['X'].cnt
  map['I'].cnt = map['I'].cnt - map['F'].cnt - map['G'].cnt
  phone = Object.keys(map)
    .filter((item) => {
      return map[item].cnt
    })
    .map((item) => {
      return ((Math.floor(map[item].num / 8) + 1) % 2 * 10 + map[item].num) % 8
    })
  return phone.sort().join('')
}

console.log(phoneAlias('EIGHT'))
console.log(phoneAlias('ZEROTWOONE'))
console.log(phoneAlias('OHWETENRTEO'))
console.log(phoneAlias('OHEWTIEGTHENRTEO'))
