const packOfGifts = ["book", "dollse", "ballo"]
const reindeers = ["da", "da", "da"]


function distributeGifts(packOfGifts, reindeers) {
    let gifts = packOfGifts.map(regalo => regalo.length)
    gifts.sort((a,b)=>a-b)
    let renos = reindeers.map(reno => reno.length * 2)
    renos.sort((c, d) => c - d)
    let totalWeight = gifts.reduce((a,b)=>a+b)
    let totalCapacity = renos.reduce((a,b)=>a+b)
    let r = Math.round(totalCapacity / totalWeight)
    return r
}




console.log(distributeGifts(packOfGifts, reindeers))