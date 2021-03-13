window.addEventListener('load', function(){
    fetch("https://api.giphy.com/v1/gifs/random?api_key=QX5LdUaQKZkLn2FCy1RVZ1UG6gX70VKG&tag=&rating=g") // Endpoint para gifs random
    .then(function(response) {
        return response.json()
    })
    .then(function(information) {
        let url = information.data.image_url
        let gif = `<p>${information.data.title}</p>`

        let titulo = document.querySelector('h1')
        titulo.innerHTML = gif

        let image = document.querySelector('img').setAttribute("src", url) // setAttribute lo que nos permite es modificar el (src="") de la etiqueta <img>
        
        let recargar = document.querySelector('button')
        recargar.addEventListener('click', function(){ // En caso de que el usuario aprete el boton "Nuevo gif" se ejecutara este codigo (El cual es similar a lo anterior)
            fetch("https://api.giphy.com/v1/gifs/random?api_key=QX5LdUaQKZkLn2FCy1RVZ1UG6gX70VKG&tag=&rating=g")
            .then(function(response) {
                return response.json()
            })
            .then(function(information) {
                let url = information.data.image_url
                let gif = `<p>${information.data.title}</p>`

                let titulo = document.querySelector('h1')
                titulo.innerHTML = gif

                let image = document.querySelector('img').setAttribute("src", url)
                
                let recargar = document.querySelector('button')
            })
            .catch(function(error) {
                console.log("Error: " + error);
            })
        })
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
})