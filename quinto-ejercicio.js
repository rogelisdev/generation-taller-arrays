let usuario = [
    { nombre: "Ana", edad: 21 },
    { nombre: "Beatriz", edad: 18 },
    { nombre: "Juan", edad: 15 }
]

function filtrarUsuarios(edadMinima, listaUsuarios) {

    let mayor = false;

    for (let calcular of listaUsuarios) {
        if (calcular.edad >= edadMinima) {
            console.log(`Bienvenido ${calcular.nombre} eres mayor de edad`)
            mayor = true;
        } else {
            console.log(`Hola ${calcular.nombre} eres menor de edad, espera unos años`)
        }
    }
}

console.log(filtrarUsuarios(18, usuario))