function afiliar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";

    document.getElementById("Mostrar").textContent = "Usuario Afiliado";
}


function cotizar() {
    let valor1 = parseFloat(document.getElementById("iphone").value);
    let valor2 = parseFloat(document.getElementById("modelo").value);

    if (valor1 === 1 && valor2 === 1) {
        document.getElementById("cotizacion").textContent = "Precio: USD 600";
    }

    if (valor1 === 1 && valor2 === 2) {
        document.getElementById("cotizacion").textContent = "Precio: USD 650";
    }

    if (valor1 === 1 && valor2 === 3) {
        document.getElementById("cotizacion").textContent = "Precio: USD 725";
    }
    if (valor1 === 1 && valor2 === 4) {
        document.getElementById("cotizacion").textContent = "Precio: USD 775";
    }

    if (valor1 === 2 && valor2 === 1) {
        document.getElementById("cotizacion").textContent = "Precio: USD 700";
    }

    if (valor1 === 2 && valor2 === 2) {
        document.getElementById("cotizacion").textContent = "Precio: USD 750";
    }

    if (valor1 === 2 && valor2 === 3) {
        document.getElementById("cotizacion").textContent = "Precio: USD 800";
    }

    if (valor1 === 2 && valor2 === 4) {
        document.getElementById("cotizacion").textContent = "Precio: USD 825";
    }

    if (valor1 === 3 && valor2 === 1) {
        document.getElementById("cotizacion").textContent = "Precio: USD 850";
    }

    if (valor1 === 3 && valor2 === 2) {
        document.getElementById("cotizacion").textContent = "Precio: USD 900";
    }

    if (valor1 === 3 && valor2 === 3) {
        document.getElementById("cotizacion").textContent = "Precio: USD 950";
    }

    if (valor1 === 3 && valor2 === 4) {
        document.getElementById("cotizacion").textContent = "Precio: USD 1.000";
    }

    if (valor1 === 4 && valor2 === 1) {
        document.getElementById("cotizacion").textContent = "Precio: USD 975";
    }

    if (valor1 === 4 && valor2 === 2) {
        document.getElementById("cotizacion").textContent = "Precio: USD 1.025";
    }

    if (valor1 === 4 && valor2 === 3) {
        document.getElementById("cotizacion").textContent = "Precio: USD 1.075";
    }

    if (valor1 === 4 && valor2 === 4) {
        document.getElementById("cotizacion").textContent = "Precio: USD 1.200";
    }
}


