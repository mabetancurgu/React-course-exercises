// Desestructuracion de arreglos
const personajes =['Goku','Vegeta','Trunks'];

//1. Para acceder a un elemento
console.log(personajes[0]);

//2. Destructuracion
// - Que ignore el primer elemento y tome el 2do
const [,p2] = personajes;

console.log(p2)

//- Con funciones 
const retornaArreglo=()=>{
    return['ABC', 123];
}

const [letras,numeros] = retornaArreglo();
console.log(numeros)

//Tarea
const userState=(valor)=>{
    return [valor,()=> {console.log('Hola Mundo')}];
}

//Solucion
const [nombre, setNombre] = userState('Goku');
console.log(nombre);
setNombre();