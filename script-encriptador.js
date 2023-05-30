var encriptador = document.querySelector(".encriptador");
var desencriptador = document.querySelector(".desencriptador");
var munieco = document.querySelector(".munieco");
var mensajeprevio = document.querySelector(".mensajeprevio");
var resultado = document.querySelector(".resultado");

encriptador.onclick = encriptar;
desencriptador.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var ingresartexto = recuperarTexto();
    resultado.textContent = encriptarTexto(ingresartexto);
}

function desencriptar(){
    ocultarAdelante();
    var ingresartexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(ingresartexto);
}

function recuperarTexto(){
    var ingresartexto = document.querySelector(".ingresartexto");
    return ingresartexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    mensajeprevio.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }

        else{
            textoFinal = textoFinal + texto [i];
        }
    }
    
    return textoFinal;   
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }

        else{
            textoFinal = textoFinal + texto [i];
        }
    }
    
    return textoFinal;   
}

const botoncopiar = document.querySelector(".botoncopiar");
    botoncopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })