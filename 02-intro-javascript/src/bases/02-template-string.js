const nombre= "Roland";
const apellido= "Gilead";

// const nombreCompleto = nombre + ' ' + apellido;

// Template String
const nombreCompleto = `${nombre} ${apellido}
${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Holis ' + nombre;
}

//Llamar una funcion dentro de un template String
console.log(`Este es un texto: ${getSaludo(nombre)}`);
