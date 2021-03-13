window.addEventListener('load', function(){
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=QX5LdUaQKZkLn2FCy1RVZ1UG6gX70VKG&limit=25&rating=g") // Endpoint para gifs en trending
    .then(function(response) {
        return response.json()
    })
    .then(function(information) {
        console.log(information.data);
        cantidad = prompt('Cuantos gifs deseas ver? (Maximo de 25 gifs)') // Preguntamos al usuario cuantos gifs quiere ver

        //let titulo = document.createElement('h1')     // createElement() sirve para crear etiquetas html desde el archivo .js
        //let imagen = document.createElement('img')    // createElement() sirve para crear etiquetas html desde el archivo .js
        // appendChild() buscar en google

        for(i=0; i < cantidad; i++){ // Hacemos un for e iteramos hasta el numero que puso el usuario
            let url = information.data[i].images.original.url // Recuperamos la direccion del gif que corresponde
            let gif = information.data[i].title // Recuperamos el titulo del gif que corresponde
            let lista = document.querySelector('ul')

            lista.innerHTML +=      // Creamos un <li> por cada gif que itere el for
            `<li>
                <h1>${gif}</h1>
                <img src="${url}">
            </li>`
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
})