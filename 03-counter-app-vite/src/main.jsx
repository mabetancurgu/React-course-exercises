import App from './HelloWorldApp';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles.css';
<link href="https://fonts.cdnfonts.com/css/geograph-edit" rel="stylesheet"></link>

    // ReactDOM.createRoot(document.getElementById('root')).render(
    //     <React.StrictMode>
    //         <App/>
    //     </React.StrictMode>
    // )

// Nota: ReactDOM esta obsoleto en React18.
//La forma correcta es:
    // import {createRoot} from 'react-dom/client';
    // const root= createRoot(document.getElementById('root'));
    // root.render(App());

        // import ReactDOM from 'react-dom/client';


//Lo haremos del modo viejo 
//Notas: dentro del FirstApp mandamos las props 
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    
       <CounterApp value={20}/>
       {/* <FirstApp title="Holass"/> */}
    </React.StrictMode>
)