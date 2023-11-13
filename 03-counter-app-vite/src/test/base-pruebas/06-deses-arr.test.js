import { usContext } from "../../base-pruebas/06-deses-obj"

describe('Prueba 06-deses-obj', () => { 
    test('debe retornar el objecto', () => { 
        const infoUser ={
            clave: 'juan',
            edad: '19'
        }
        
        const testInfo =  {nombreClave: infoUser.clave,
        anios: infoUser.edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }}

        const user = usContext(infoUser);
        expect(testInfo).toEqual(user)


     })
 })