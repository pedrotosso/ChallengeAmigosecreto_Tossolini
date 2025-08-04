let listaAmigos = [];
let resultado = "";

//Funcion para agregar amigos a una lista, siempre y cuando ingrese un nombre valido y que no se repita
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    //Validar si el nombre ya existe (ignorando mayúsculas/minúsculas)
    let yaExiste = listaAmigos.some(nombre => nombre.toLowerCase() === amigo.toLowerCase());
    if (yaExiste) {
        alert("Ese nombre ya fue agregado.");
        return;
    }
    listaAmigos.push(amigo);
    document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`;
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

//Funcion para sortear un amigo secreto, la cual recibe la lista de amigos y selecciona un nombre aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Por favor, agrega al menos un nombre.");
        return;
    }
    //Validar si hay al menos dos amigos para realizar el sorteo
    if (listaAmigos.length === 1) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    resultado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").textContent = `El amigo secreto es: ${resultado}`;
    document.getElementById("reiniciar").disabled = false;
}

function reiniciarJuego(){
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("reiniciar").disabled = true;
}