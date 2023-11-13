import PropTypes from 'prop-types';
//<>..</>: Para agrupar elementos en un solo componente y poder devolverlos => lin. 23
// No poner objectos de js direct. entre {} ejemplo: {key:value} => lin. 28
// (Tampoco null, undefined, boolean)
// JSON.Stringify: serializa el objeto y regresa el objeto en formato json => lin. 32
// No poner una promesa o func async


const newMessage = {
    message: 'Hola',
    title: 'Adios',
}

const getMessage = () =>{
    return 'Holas';
}

// recibimos las props de padre y las desestructramos
// se puede poner valores por defect.

const FirstApp = ({title, subTitle,name}) =>{
    return(
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>  
    <p>{subTitle}</p>  
    <p>{name}</p>

    {/* <h1> {newMessage}</h1>  doesn't work
    <h3>{newMessage.title}</h3>
    <h4>{JSON.stringify(newMessage)}</h4>
    <h4>{getMessage()}</h4> */}
    </> 
    )}

export default FirstApp;

//1. Sobre props: importarlo
// 1.1. Defino los tipos de cada props y si es requerido (js)
FirstApp.propTypes={
    title:  PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string

}
//1.2. Defino props de tipo default
FirstApp.defaultProps={
    // title: "Titulo default",
    subTitle: "Subtitulo default",
    name: "Manu"
}
