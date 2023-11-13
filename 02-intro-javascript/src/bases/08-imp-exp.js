//importar archivo
// import heroes from './data/heroes'; por default
import owners, {heroes} from '../data/heroes'; // default + individual
// console.log(owners)


//1. FIND.
// Tarea: Encontrar un heroe por su id
// Recorre el array de objetos de heroes, cada heroe compara su id
//El find solo retorna 1
const getHeroeById=(id) =>{
    return heroes.find( (heroe)=> heroe.id === id);
}
export default getHeroeById;

//Forma simplificada
const getHeroeById2=(id) =>heroes.find( (heroe)=> heroe.id === id);
// console.log(getHeroeById(2));

//2. FILTER
// Retorna todos
export const getHeroesByOwner= (owner) => heroes.filter((heroe)=> heroe.owner === owner);


// console.log(getHeroesByOwner('DC'));