//Arreglos en JS: colecccion de inf en una misma var

//1.
// - No se recomienda hacerlo de esta manera
// - Con el 100 dices el tamaño pero igual lo puedes expandir con el push
const arreglo = new Array(100);  
arreglo.push(1)

//2.
// - Se deberia inicializar el array asi
// - No usar push para agregar elementos
const arreglo2 = [1,2];
arreglo2.push(3)

//3. Para extraer info de otro arreglo
// no recom: let arregloCopia= arreglo2
let arregloCopia = [...arreglo2,4];
console.log(arregloCopia)

//4. Metodo map, crea un nuevo arreglo
const arreglo3 = arreglo2.map(function(numero){
    return numero*2
});


console.log(arreglo3)