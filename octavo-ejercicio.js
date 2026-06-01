
function convertidorPesosAUsa(tasa, dolares){
    let convertidor = tasa * dolares
    let resultado = Math.round(convertidor)
    console.log(`Total: ${resultado} COP`)
    return resultado
}

convertidorPesosAUsa(3700, 45)