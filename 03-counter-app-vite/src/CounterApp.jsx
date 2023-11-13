//HOOKS:
//1. Se debe importar. Empieza por use..
import {useState} from 'react';
//

import PropTypes from 'prop-types';

export const CounterApp =({value}) =>{
    // [ 'valorDelEstado', 'ModificarElEstado'] = useState('valInicialEstado')
    const [ counter, setCounter ] = useState(value)

    const handleAdd=(event)=>{
        // console.log(event);

        //HOOKS: 
        //Aumenta el counter en 1
            setCounter (counter+1); 
        /*El valor de counter lo pone en 100 
            setCounter(100);
        Otra forma de poner el valor
            setCounter((c)=> c+1); */
    }

    //Tareas:
    const handleSubstract=()=>setCounter(counter-1);
    const handleReset=()=>setCounter(value);

    return (
        <>
        <h1> CounterApp</h1>
        <h2> { counter } </h2>
        {/* Cuando se hace click en el boton manda la info del event */}
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
        </>
    );
}
export default CounterApp;

CounterApp.propTypes={
    value: PropTypes.number,
}