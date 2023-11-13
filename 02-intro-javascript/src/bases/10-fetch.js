const apiKey = '0mNNfwHlfFByB8XQgFkYywq8UGDjMAGd'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//fetch return a promise
// Puedo encadenar promesas
peticion
    .then(resp => resp.json()) //resuelve lo que viene en el api, trae el body
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);

    })

.catch(console.warn);