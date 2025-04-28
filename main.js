let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while (nomeUsuario == ""){
    nomeUsuario = prompt("Qual é seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = "seja be4m vindo";
}else {
    elemento.textContent = nomeUsuario;
}
