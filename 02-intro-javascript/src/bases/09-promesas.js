import getHeroeById, {getHeroesByOwner} from "../data/heroes";

//PROMESAS
// Recibe dos argumentos: 
    //resolve: si la promesa es exitosa
    //reject: si la promesa falla
//Metodos: 
    //then: se hizo correctamente
    //catch: si hay un error, manejar la excepcion
    //finally: se ejecuta de ultimo

// Proceso:
    // promesa > resolve > then 
    // Cuando termine con exito la promesa se llama al resolve
    // el resolve ejecuta el then y envie el argumento (p1heroe)
    // el then recibe el argumento y ejecuta
    // sino, promesa falla > reject > catch
const promesa = new Promise((resolve,reject) =>{
    setTimeout( () => {

        const p1heroe =getHeroeById(2);
        resolve(p1heroe);
        reject('No se pudo encontrar el heroe');

    }, 2000)
});

promesa.then((heroe)=>{
    console.log('heroe', heroe)
})
.catch(err => console.warn(err));

//Ejemplo 2: Mandar argumentos a la promesa
//Funciona de igual forma, solo que con una funcion

const getHereoByIdAsync= (id) =>{
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
    
            const p1 =getHeroeById(id);
            if(p1){ //si esxiste
                resolve(p1);
            }else{
                reject("No encontrado :c");
            }
        }, 2000)
    });
}
getHereoByIdAsync(1)
//equivalente, va a recibir como arg. el primer arg. que reciba la funcion
//no hay que copiarlo
    .then(console.log)
    .catch(console.warn); 