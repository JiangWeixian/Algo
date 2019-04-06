function tickets (peopleInLine) {
  let charge = 0
  for (let index in peopleInLine) {
    let item = peopleInLine[index]
    if (item === 25) {
      charge += item
    } else {
      if (charge >= (item - 25)) {
        charge = charge - (item - 25) + item
      } else {
        return 'NO'
      }
    }
    console.log(item, charge)
  }
  return 'YES'
}

console.log(tickets([25,50,25,100,25,25,50,100,25,25,50,100,25,50,25,100]))
