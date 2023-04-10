function getGiftsToRefill(a1, a2, a3) {
    return [
      ...new Set([...a1, ...a2, ...a3])]
        .filter(gift => 
          a1.includes(gift) + 
          a2.includes(gift) + 
          a3.includes(gift) 
          === 1
        )
}
function getGiftsToRefillMIA(a1, a2, a3) {
  for (let gift of a1) {
    let actual = gift
    if (!(a2.includes(actual)) && !(a3.includes(actual))) {
      reponer.push(actual)
    }
  }
  for (let gift of a2) {
    let actual = gift
    if (!(a1.includes(actual)) && !(a3.includes(actual))) {
      reponer.push(actual)
    }
  }
  for (let gift of a3) {
    let actual = gift
    if (!(a2.includes(actual)) && !(a1.includes(actual))) {
      reponer.push(actual)
    }
  }
  return reponer
}

console.log(getGiftsToRefill(['bici','muñeca','pc'],['bici','pc','futbol'],['bici','bici','pc']))