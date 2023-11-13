import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un object', () => { 
        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user);
     })

     test('getUsuarioActivo debe de retornar un objecto', () => { 
        const name ='Manu'
        const user = getUsuarioActivo(name);
        const testUser = {
            uid: 'ABC567',
            username: `${name}`
        }

        expect(testUser).toEqual(user)
        
      })
 })