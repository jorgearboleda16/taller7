function agregarFila() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;

    if (nombre && email && edad && fecha && genero) {
        var tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
        var nuevaFila = tabla.insertRow(tabla.rows.length);

        var celdaNombre = nuevaFila.insertCell(0);
        var celdaEmail = nuevaFila.insertCell(1);
        var celdaEdad = nuevaFila.insertCell(2);
        var celdaFecha = nuevaFila.insertCell(3);
        var celdaGenero = nuevaFila.insertCell(4);

        celdaNombre.innerHTML = nombre;
        celdaEmail.innerHTML = email;
        celdaEdad.innerHTML = edad;
        celdaFecha.innerHTML = fecha;
        celdaGenero.innerHTML = genero;

        document.getElementById("formulario").reset();
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
