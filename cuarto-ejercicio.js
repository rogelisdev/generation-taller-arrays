let alumno1 = [12, 8, 20]

function calcularNotas(notas) {

    let suma = 0

    for (let calcular of notas) {
        suma += calcular
    }

    let promedio = suma / notas.length

    if(promedio >= 10){
        console.log("Felicitaciones aprobaste")
    } else {
        console.log("Sigue estudiando")
    }

    return promedio;
}


console.log(calcularNotas(alumno1))