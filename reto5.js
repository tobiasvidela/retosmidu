//                  [12, 3, 11, 5, 7]
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20 //20
const maxCities = 3 //3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100

/*maxGifts >= 1
giftsCities.length >= 1
maxCities >= 1
El número de maxCities puede ser mayor a giftsCities.length */

//la suma más alta debe tener como sumandos la misma o menor cantidad de maximas ciudades a visitar
//la suma más alta debe ser igual o menor al máximo de regalos a repartir


function getMaxGifts(giftsCities,maxGifts,maxCities) {
    let totalSum = 0
    // let mayorAMax = 0;
    // // for (let i = 0; i < giftsCities.length; i++) {
    // //     let f = giftsCities[i], filtro = 0
    // //     if (f > maxGifts) {mayorAMax++}
    // //     if (mayorAMax >= giftsCities.length) {return 0} else {continue}
    // // }

    

    // for (let i = 0; i < giftsCities.length; i++) {
    //     let sumandos = giftsCities[i]
    //     for (let j = 0; j < maxCities; j++) {
    //         sumandos += giftsCities[j+1]
    //         if (sumandos <= maxGifts) {
    //             maxSumPossible = sumandos
    //             if (sumandos = maxGifts) {
    //                 maxSumPossible = sumandos
    //                 break;
    //             }
    //         }
    //     }
    // }
    return totalSum
}