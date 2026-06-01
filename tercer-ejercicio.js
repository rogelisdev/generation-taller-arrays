const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 }
];

function buscarProducto(nombreProducto, inventario) {

    if (typeof nombreProducto !== "string") {
        console.log("Tiene que ser una cadena")
        return null;
    }

    for (let buscar of inventario) {
        if (buscar.nombre === nombreProducto) {
            console.log(`Producto se encuenta dosponible ${buscar.nombre}`)
            return buscar
        }
    }
    console.log("Producto no existe, intente denuevo")
    return null;
}

buscarProducto("Zapatos", inventario);