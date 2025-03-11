// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []
let mensajeDeError = ["¡Error! No puedes ingresar un nombre en blanco. Ingresa un nombre válido", "¡Error! Nombre ya ingresado. Ingresar un nuevo nombre"]

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if (nombre == ""){
        alert(mensajeDeError[0]);
        document.getElementById("amigo").value = "";
        return;
    }

    if (nombres.includes(nombre)){
        alert(mensajeDeError[1]);
        document.getElementById("amigo").value = "";
        return;
    }

    nombres.push(nombre);
    document.getElementById("amigo").value = "";

    mostrarNombres();
}

function mostrarNombres(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerText = "";

    for (let i = 0; i < nombres.length; i++) {
        listaAmigos.innerText += nombres[i] + "\n";
    }
}