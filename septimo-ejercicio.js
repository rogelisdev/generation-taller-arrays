let dinero = 16000
let actual = 15000
function retirarDinero(retirar, saldoActual){
    let retiro = retirar - saldoActual

    if(saldoActual <= 0){
        console.log("No tienes saldo disponible para retirar")
    } else if(retirar > saldoActual){
        console.log("El saldo a retirar es mayor que el saldo actual, intente con otra cantidad")
    } else{
        console.log(`Retiro sastifactorio su saldo actual es: ${retiro}`)
    }
    return retiro;
}

retirarDinero(dinero, actual)