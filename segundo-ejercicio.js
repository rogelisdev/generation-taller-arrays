function validarContrasena(contrasena){
    if(contrasena.length <= 8){
        console.log("Necesitas una contraseña con mas de 8 caracteres, intente denuevo")
        return false;
    } else{
    return true;
    }

    if(typeof contrasena !== "string"){return false;
    return /[a-z]/.test(contrasena);
    console.log("Tu contraseña incluye una minuscula")
}

    if(typeof contrasena !== "string"){return false;
    return /[A-Z]/.test(contrasena);

    console.log("Tu contraseña incluye una mayuscula")
    }

    console.log("Tu contraseña cumple con todos los requisitos")
}



validarContrasena("Hola1234")


