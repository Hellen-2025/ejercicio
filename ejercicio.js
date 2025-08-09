<<<<<<< HEAD
// 1. Función declarativa: consumo mensual en kWh 
=======
// 1. Función declarativa: consumo mensual en kWh
>>>>>>> 7ed2b10 (Se agrega función flecha calcularSubtotal para retornar consumo × tarifa)
function consumoMensual() {
    let consumo = parseFloat(prompt("Ingrese su consumo mensual en kWh:"));
    return consumo;
}

// 2. Función declarativa: tarifa base por kWh
function tarifaBase() {
    let tarifa = parseFloat(prompt("Ingrese la tarifa base por kWh (en pesos):"));
    return tarifa;
}

// 3. Función de expresión: cargo fijo
const cargoFijo = function() {
    let fijo = parseFloat(prompt("Ingrese el cargo fijo del servicio (en pesos):"));
    return fijo;
};

// 4. Función de expresión: porcentaje IVA
const porcentajeIVA = function() {
    let iva = parseFloat(prompt("Ingrese el porcentaje de IVA:"));
    return iva;
};

// 5. Función flecha: subtotal = consumo × tarifa
const calcularSubtotal = () => {
    return consumoMensual() * tarifaBase();
};

// 6. Función flecha: valor IVA = subtotal × porcentaje / 100
const calcularIVA = () => {
    return calcularSubtotal() * porcentajeIVA() / 100;
};

// 7. Función flecha: total = subtotal + IVA + cargo fijo
const calcularTotal = () => {
    return calcularSubtotal() + calcularIVA() + cargoFijo();
};

// 8. Función final para imprimir resultados
function mostrarFactura() {
    const subtotal = calcularSubtotal();
    const ivaValor = calcularIVA();
    const fijo = cargoFijo();
    const total = subtotal + ivaValor + fijo;

<<<<<<< HEAD
    console.log(" FACTURA DE ENERGÍA");
=======
    console.log("📄 FACTURA DE ENERGÍA");
>>>>>>> 7ed2b10 (Se agrega función flecha calcularSubtotal para retornar consumo × tarifa)
    console.log("Subtotal: $" + subtotal);
    console.log("IVA: $" + ivaValor);
    console.log("Cargo fijo: $" + fijo);
    console.log("TOTAL A PAGAR: $" + total);
}

// Ejecutar
<<<<<<< HEAD
mostrarFactura ();
=======
mostrarFactura();
>>>>>>> 7ed2b10 (Se agrega función flecha calcularSubtotal para retornar consumo × tarifa)
