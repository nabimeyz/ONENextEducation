//Función para encriptar
function encriptarTexto(){

    //ToLowerCase convierte la entrada en caracteres en minúscula.
    let txtLimpio = document.getElementById("entradaTexto").value;
    
    //comprobar la entrada de texto con mayùsculas
    if (identificarMayus(txtLimpio)){
        console.log("La entrada tiene mayúsculas.");
    } else {
        console.log("La entrada no tiene mayúsculas.");
    }

    //Reemplazar los valores de las vocales del mensaje ingresado
    let textoEncriptado = txtLimpio.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    //Imprimir el mensaje en el espacio de salida de Texto
    document.getElementById("salidaTexto").innerHTML = textoEncriptado;
}

//Función para desencriptar
function desencriptarTexto(){
    let txtEncriptado = document.getElementById("entradaTexto").value; 

    //comprobar la entrada de texto con mayùsculas
    if (identificarMayus(txtEncriptado)){
        console.log("La entrada tiene mayúsculas.");
    } else {
        console.log("La entrada no tiene mayúsculas.");
    }

    let textoDesencriptado = txtEncriptado.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    //Imprimir el mensaje en el espacio de salida de Texto
    document.getElementById("salidaTexto").innerHTML = textoDesencriptado;
}


//Funciòn para identificar mayùsculas en la entrada
function identificarMayus(entrada){
    return /[A-Z]/.test(entrada); //devuelve T o F dependiendo de si encuentra mayùsculas
}