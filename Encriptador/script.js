//Función para encriptar
function encriptarTexto(){

    //ToLowerCase convierte la entrada en caracteres en minúscula.
    let txtLimpio = document.getElementById("entradaTexto").value;
    
    //comprobar la entrada de texto con mayùsculas
    if (identificarMayus(txtLimpio)){
        console.log("La entrada tiene mayúsculas.");
        return;
    } else {
        console.log("La entrada no tiene mayúsculas.");
    }

    //Reemplazar los valores de las vocales del mensaje ingresado
    let textoEncriptado = txtLimpio.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    //Ocultar el contenido para imprimir en un espacio libre
    ocultarCont();
    //Imprimir el mensaje en el espacio de salida de Texto
    document.getElementById("salidaTexto").innerHTML = textoEncriptado;
}

//Función para desencriptar
function desencriptarTexto(){
    let txtEncriptado = document.getElementById("entradaTexto").value; 

    //comprobar la entrada de texto con mayùsculas
    if (identificarMayus(txtEncriptado)){
        console.log("La entrada tiene mayúsculas.");
        return;
    } else {
        console.log("La entrada no tiene mayúsculas.");
    }

    let textoDesencriptado = txtEncriptado.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    //Ocultar el contenido para imprimir en un espacio libre
    ocultarCont();
    //Imprimir el mensaje en el espacio de salida de Texto
    document.getElementById("salidaTexto").innerHTML = textoDesencriptado;
}

//Funciòn para identificar mayùsculas en la entrada
function identificarMayus(entrada){
    return /[A-Z]/.test(entrada); //devuelve T o F dependiendo de si encuentra mayùsculas
}

//Funciòn para copiar el texto que se encripta/desencripta, reemplazando comando obsoleto exec.command
function copiarTexto (){
    let textoACopiar = document.getElementById("salidaTexto").innerText;

    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            console.log("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al intentar copiar el texto: ', err);
        });
}

//Función para ocultar el aviso de "no texto" cuando se encripte/desencripte
function ocultarCont(){
    let muneco = document.getElementById("divLupa");
    let anuncioMsj = document.getElementById("divEspera");

    muneco.classList.add("ocultar");
    anuncioMsj.classList.add("ocultar");
} 