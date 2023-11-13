export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
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
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//1. Exportacion por defecto
    // export default[
    //  ...
    // ]

//2. Otra opcion por defecto: Usar este
    // const heroes = [
    //     ..
    // ]
    // export default heroes;

const owners =['DC','Marvel']
export default owners;

//3. Exportacion masivas: defecto + individuales
// export {
//     heroes as default,
//     owners
// }
