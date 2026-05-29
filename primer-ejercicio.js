function calculadorPropipna(total, porcentaje){
    let calcular = total * porcentaje/1000;
    let consumoTotal = total + calcular;
    console.log(`La propina es de: ${calcular}`)
    console.log(`El consumo total incluida la propina es de: ${consumoTotal}`)
}

calculadorPropipna(12000, 10);