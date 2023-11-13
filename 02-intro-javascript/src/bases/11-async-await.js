// Async
//1. Sea el codigo: 
    // const getImagenPromesa = () =>{
    //     const promesa = new Promise ((resolve, reject) =>{
    //         resolve ('algo')
    //     })
    //     return promesa;
    // }

//2. Simplificado seria:
    // const getImagenPromesa= () => new Promise( resolve => resolve('algo'))


//3. Con Async + await
// Async: vuelve una funcion para que retorne una promesa
// sin Async no hay await
// Await: una funcion async sea pausada hasta que promise sea terminada 
// Para el manejo de los errores hay usar try -catch

const getImagen = async () =>{
    try{
        const apiKey = '0mNNfwHlfFByB8XQgFkYywq8UGDjMAGd';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const img= document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(url);
    } catch (err){
        console.error(err)
    }

}

getImagen();

