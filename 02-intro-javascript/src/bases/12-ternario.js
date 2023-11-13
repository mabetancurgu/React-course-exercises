//Operador condicional ternario

const activo = true;

// 1. Sea el codigo 
    // let mensaje = '';
    // if (!activo){
    //     mensaje = 'Activo';
    // }else{
    //     mensaje = 'Inactivo';
    // }

//2. Se puede resumir en: 
 // const mensaje = (condicion de que activo sea true) ? ( mensaje toma el valor de activo si cumple) : (mensaje toma otro valor si no se cumple)
const mensaje = (activo) ? 'Activo' : 'Inactivo';

//3. Sino quiero devolver nada si no se cumple:
// const mensaje (condicino de que activo sea true) && (mensaje para devolver si cumple)
    //const mensaje = activo && 'Activo'
console.log(mensaje);


