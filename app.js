// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    let mensajeDeErrorVacio = "¡Error! No puedes ingresar un nombre en blanco.";

    if (nombre == ""){
        alert(mensajeDeErrorVacio);
    }else{
        nombres.push(nombre);
    }

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