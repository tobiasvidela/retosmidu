
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)
                        
console.log(wrapped)

function wrapping(gifts) {
    //Crear el array de regalos envueltos
    let regalosEnvueltos = [];
    //Envolver cada regalo
    for (let i = 0; i < gifts.length; i++) {
        // guardar cada regalo
        let word = gifts[i]
        // establecer el largo de cada envoltorio para cada regalo
        // /./g selecciona todos los caracteres del string a reemplazar
        let envoltorio = `*${word.replace(/./g, '*')}*`;
        // completar el envoltorio
        let regalo = `\n*${word}*\n`
        regalosEnvueltos[i] = envoltorio //  arriba
        regalosEnvueltos[i] += regalo //  costados
        regalosEnvueltos[i] += envoltorio //  abajo
    }
    //Devolver el array creado
    return regalosEnvueltos
}
