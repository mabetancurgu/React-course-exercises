import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

 
describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroe ).toEqual({
                    id:1,
                    name:'Batman',
                    owner: 'DC'
                });
                done(); //espera a que tenga una respuesta
 
            })
            .catch( done ); //por si hay un error
    });

    //evaluo error
    test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
        .then(hero=>{
            expect(hero).toBeFalsy();
            done()
        })
        .catch( error =>{
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            console.log(error)
            done()});
    });

})