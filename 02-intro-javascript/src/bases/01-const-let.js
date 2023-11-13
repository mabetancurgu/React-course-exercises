
// 1. Variables y constantes.
//- No usar var, solo const y let

const nombre = 'Roland'
const apellido= 'Gilead'

let valorDado=5;
valorDado=4;

console.log(nombre,apellido,valorDado)

if(true){
    // Variable de scope
    let valorDado=6;
    console.log(valorDado)
}

console.log(valorDado);