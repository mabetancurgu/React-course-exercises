import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        const id=1;
        const hero= getHeroeById(id)

        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})

     });
     test('getHeroeById debe retornar undefined si no existe el ID', () => { 
        const id=100;
        const hero= getHeroeById(id)

        expect(hero).toBeFalsy();

     });
     
     //Tarea:
     // Debe retornar un arreglo con los heroes de DC
     // length ===3
     // toEqual al arreglo filtrado

     test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        const owner='DC';
        const heroes1= getHeroesByOwner(owner)
        const heroesTest =[
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]
        expect(heroes1).toEqual(heroesTest);
        //camino real para hacerlo
        expect(heroes1).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

     });

     //debe retornar un arreglo con los heroes de Marvel
     //length ==2
     test('getHeroesByOwner debe retornar un arreglo de length 2', () => { 
        const owner='Marvel';
        const heroes= getHeroesByOwner(owner)
        expect(heroes.length).toBe(2);

     });



 })