//Desestructuracion
//Asignacion desestructurante

const persona={
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//1. Extrar solo el nombre, llamada nombre2
const {nombre: nombre2} = persona;

//console.log(persona.nombre)
console.log(nombre2)

//2. Extraer todos los atributos (no importa el orden)
const {edad, nombre, clave} =persona;
console.log(nombre);
console.log(edad);
console.log(clave);

//3. Recibir un objeto
const retornaPersona = (usuario) =>{
    console.log(usuario)
}
retornaPersona (persona);

//4. Mostrar solo ciertas propiedades
const retornaPersona2 = (usuario) =>{
    const {edad, nombre, clave} =usuario;
    console.log(edad,clave)
}
retornaPersona2 (persona);

//5. Recibir solo las propiedades que me interesa
const retornaPersona3 = ({nombre}) =>{
    console.log(nombre)
}
retornaPersona3 (persona);

//6. Asignar valores por defecto
const retornaPersona4 = ({nombre, edad, rango='Capitán'}) =>{
    console.log(nombre,edad, rango)
}
retornaPersona4 (persona);

//7. Ejercicio
const userContext = ({nombre, edad, clave, rango='Capitán'}) =>{
    return{
        nombreClave: clave,
        anios: edad
    }
}
const {nombreClave, anios} = userContext(persona);
console.log(nombreClave, anios)

//8. Extraer objetos anidados
const userContext2 = ({nombre, edad, clave, rango='Capitán'}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.1232,
            lng: -12.32
        }
    }
}
const {latlng: {lat,lng}} = userContext2(persona);
console.log(lat,lng)

// otra opcion
// const {latlng} =useContext2(persona);
// const {lat,lng} =latlng;