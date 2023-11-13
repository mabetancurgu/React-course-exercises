
// Definir un objeto literal, por default tiene un prototype con ciertas propiedades.
const persona={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 32131,
        lat: 14.33,
        lng: 34.222
    }
};

//- Otra opcion de imprimir como tabla
//console.table({persona})

//- No copiar asi, se esta copiando la referencia, no el valor
// const persona2= persona; 

//- Tener un clon de objecto
const persona3 = {...persona}; 
persona3.nombre="New name";

console.log({persona});
console.log({persona3})