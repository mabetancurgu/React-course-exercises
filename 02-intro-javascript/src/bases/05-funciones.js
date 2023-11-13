//Funciones
//1. Forma no recomendada
    // function saludar(nombre){
    //     return `Hola, ${nombre}`;
    // }

// 2. Forma correcta:
// - Hacer funciones guardandolo como cte
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

//3. Funciones de flecha ***
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// - Forma mas simplificada cuando solo hay un return en func. fleacha 
const saludar3 = (nombre) => `Hola de nuevo ${nombre}`;

// - Funcion flecha sin arg.
const saludar4 = () => `Hola sencillo`; 

// - Return un objeto implicito
const getUser = () => ({
    uid: 'ABC123',
    username: 'name_123'
})

//4. Tarea: Apartir de 
    function getUsuarioActivo(nombre){
        return {
            uid: 'ABCD567',
            username: nombre
        }
    }
    const usuarioActivo = getUsuarioActivo('Fernando');

// 1. Transf. a funcion de flecha
// 2. Retornar un objeto implicito
// 3. Test

    const getUsuarioActivo2=(nombre) =>({
        uid: 'ABCD567',
        username: nombre
    })

    const usuarioActivo2 = getUsuarioActivo2('Fernando');
    console.log(usuarioActivo2);