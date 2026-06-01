let texto = "Hola este es mi texto y voy a contar cuantas palabras tiene"

function contadorPalabras(contador){

    let palabras = contador.split(" ")
    for(let i = 0; i < palabras.length; i++){
        console.log(i)
    }
    return contador;
}

contadorPalabras(texto)