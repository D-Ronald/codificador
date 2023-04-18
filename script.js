function criptografar(mensagem) {
let mensagemCriptografada = "";
for (let i = 0; i < mensagem.length; i++) {
    switch (mensagem[i]) {
    case "e":
        mensagemCriptografada += "enter";
        break;
    case "i":
        mensagemCriptografada += "imes";
        break;
    case "a":
        mensagemCriptografada += "ai";
        break;
    case "o":
        mensagemCriptografada += "ober";
        break;
    case "u":
        mensagemCriptografada += "ufat";
        break;
    default:
        mensagemCriptografada += mensagem[i];
        break;
    }
}
return mensagemCriptografada;
}


function descriptografar(mensagemCriptografada) {
let mensagemDecodificada = "";
let i = 0;
while (i < mensagemCriptografada.length) {
    if (mensagemCriptografada[i] === "e" && mensagemCriptografada[i+1] === "n" && mensagemCriptografada[i+2] === "t" && mensagemCriptografada[i+3] === "e" && mensagemCriptografada[i+4] === "r") {
    mensagemDecodificada += "e";
    i += 5;
    } else if (mensagemCriptografada[i] === "i" && mensagemCriptografada[i+1] === "m" && mensagemCriptografada[i+2] === "e" && mensagemCriptografada[i+3] === "s") {
    mensagemDecodificada += "i";
    i += 4;
    } else if (mensagemCriptografada[i] === "a" && mensagemCriptografada[i+1] === "i") {
    mensagemDecodificada += "a";
    i += 2;
    } else if (mensagemCriptografada[i] === "o" && mensagemCriptografada[i+1] === "b" && mensagemCriptografada[i+2] === "e" && mensagemCriptografada[i+3] === "r") {
    mensagemDecodificada += "o";
    i += 4;
    } else if (mensagemCriptografada[i] === "u" && mensagemCriptografada[i+1] === "f" && mensagemCriptografada[i+2] === "a" && mensagemCriptografada[i+3] === "t") {
    mensagemDecodificada += "u";
    i += 4;
    } else {
    mensagemDecodificada += mensagemCriptografada[i];
    i++;
    }
}
return mensagemDecodificada;
}
  


function codificar() {
    var texto = document.getElementById("texto").value;
    var texto_codificado = criptografar(texto);
    document.getElementById("texto").value = texto_codificado;
}

function decodificar() {
    var texto_codificado = document.getElementById("texto").value;
    var texto = descriptografar(texto_codificado);
    document.getElementById("texto").value = texto;
}