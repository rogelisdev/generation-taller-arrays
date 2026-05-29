function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        console.log("Necesitas una contraseña con mas de 8 caracteres, intente denuevo")
        return false;
    }

    if (!/[A-Z]/.test(contrasena)) {
        console.log("Debe incluir al menos una mayúscula");
        return false;
    }

    if (!/[0-9]/.test(contrasena)) {
        console.log("Debe incluir al menos una numero");
        return false;
    }
    console.log("Contraseña aceptada")
    return true;

}




validarContrasena("Hola1234")


