/*Metztli Huertero Granada
Desarrollo de ejercicio del curso "Lógica de programación", ONE Next Education */

//Variables
let limiteMax = 20;
let numeroSecreto = Math.floor(Math.random()*limiteMax) + 1;
let numeroUsuario, intentos = 1, intentoMax = 3;

console.log (numeroSecreto);

do {
    let numeroUsuario = prompt(`Digita un número entre 1 y ${limiteMax}: `);
    //let numeroUsuario = prompt("Digita un numero del 1 al 10: ");

    console.log (numeroUsuario);

    //Comparación de valores
    if (numeroUsuario == numeroSecreto){
        alert(`Correcto! el numero escreto es ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); //según el valor de intentos, se impŕimirá un mensaje
        break;
    }
    //En caso de que no se digite el número asignado como secreto
    else {
        if (numeroUsuario < numeroSecreto){
            alert("El número que ingresaste es menor que el número secreto");
        }
        if (numeroUsuario > numeroSecreto){
            alert("El número que ingresaste es mayor que el número secreto");
        }
        //Aumento de intentos cuando no se acierta el numero 
        intentos++;

        //Evaluación del numero de intentos maximos para salir del script y la estructura do while
        if (intentos > 3){
            alert(`Utilizaste tus únicos ${intentoMax} intentos.`);
            alert(`Fallaste, el número secreto era: ${numeroSecreto}`);
            break;
        }
    }
} while (numeroUsuario != numeroSecreto);