function validar() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;



    if (usuario == "eldelima" && clave == "1234") {

        window.location.href = "venta_celulares.html"
    } else {
        alert("USUSARIO O CLAVE INVALIDOS");
    }

}
