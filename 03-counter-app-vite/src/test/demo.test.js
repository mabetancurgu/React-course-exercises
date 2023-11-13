describe('Pruebas en <DemoComponent/>, esto es un agrupador', () => { test('Esta prueba no debe de fallar', ()=>{
    //1. inicializacion
    const message1= 'Hola mundo';

    //2. estimulo
    const message2= message1.trim();

    //3. observar el comportamiento esperado. 
    //condicion para que pase la prueba
    expect(message1).toBe(message2)
}) })
