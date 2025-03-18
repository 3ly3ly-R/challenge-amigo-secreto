// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigo = document.getElementById("amigo");
let listaAmigos = [];
// El elemento ul define una lista desordenada.
let ulListaAmigos = document.getElementById("listaAmigos");
let ulAmigoSecreto = document.getElementById("resultado");

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    // Valida si el usuario ingresó un nombre.
    // El método trim elimina los espacios en blanco y posteriormente se verifica si la cadena resultante tiene valor cero.
    if (nombreAmigo.value.trim().length === 0) {
        // Si el campo está vacío, arroja un mensaje de error.
        alert("Por favor, ingrese un nombre válido");
    } else {
        // Si el usuario ingresa un nombre, el nombre se añade a la lista.
        listaAmigos.push(nombreAmigo.value);
        // La etiqueta <li> </li> define cada elemento (nombre) de la lista.
        ulListaAmigos.innerHTML += `<li>${nombreAmigo.value}</li>`;
        // Se limpia el campo de entrada.
        limpiarCaja();
    }
}

function sortearAmigo() {
    // Asignamos otro orden (aleatorio) a la lista ingresada por el usuario.
    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sorteo];
    // Mostramos el resultado.
    ulAmigoSecreto.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}