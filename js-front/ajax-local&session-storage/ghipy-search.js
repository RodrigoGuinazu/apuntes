window.addEventListener('load', function(){

    let resultados = document.querySelector('form.resultados')
    console.log(resultados)
    resultados.addEventListener('submit', function(e){

        e.preventDefault();

        let busqueda = document.querySelector('.queryString').value
        console.log(busqueda)

        let cantidad = document.querySelector('.limitString').value
        console.log(cantidad)

        //let busqueda = prompt("Busca tu gif: ") // Ver como hacer con un form en el html
        //let cantidad = prompt("Cuantos gifs quieres buscar? (Maximo de 25): ") // Ver como hacer con un form en el html

        let api = "https://api.giphy.com/v1/gifs/search?api_key=QX5LdUaQKZkLn2FCy1RVZ1UG6gX70VKG" // Comienzo de la Api y Key de la API
        let query = "&q=" + busqueda // Query string para la busqueda mas lo que busque el usuario
        let limit = "&limit=" + cantidad // Limites(&limit=25) y la cantidad de gifs que el usuario indique 
        let others = "&offset=0&rating=g&lang=en" // Desde que posicion empieza del array de resultados(&offset=0), si es para mayores o apto para todo publico (&rating=g) y lenguaje (&lang=en)

        let apiCompleta = api + query + limit + others
        
        fetch(apiCompleta) // Endpoint para search
        .then(function(response) {
            return response.json()
        })
        .then(function(information) {
            console.log(information);

            let titulo = document.querySelector('.titulo')
            titulo.innerHTML += busqueda // Agregando lo buscado al titulo

            for(i=0; i < information.data.length; i++){ // Hacemos un for e iteramos hasta el numero que puso el usuario
                let url = information.data[i].images.original.url // Recuperamos la direccion del gif que corresponde
                let gif = information.data[i].title // Recuperamos el titulo del gif que corresponde
                let lista = document.querySelector('ul')

                lista.innerHTML +=       // Creamos un <li> por cada gif que itere el for
                `<li>
                    <h1>${gif}</h1>
                    <img src="${url}">      
                </li>`
            }

            // Ver como hacer para que cuando se busca algo nuevo se genere la busqueda de vuelta

        })
        .catch(function(error) {
            console.log("Error: " + error);
        })

        /*let boton = document.querySelector("button")
        boton.addEventListener("click", function(){ // Ver como hacer para que no haga falta refrescar toda la pagina, y perder los gifs anteriores, para que el usuario quiera hacer otra busqueda
            location.reload() // Recarga la pagina para que el usuario pueda realizar una nueva busqueda
        })*/
    })
})
