window.addEventListener("load", function(){ // Se recomienda hacer esta linea al principio y todo el codigo que escribamos este adentro de esta
    alert("Bienvenidos a mi sitio"); // Se recomienda usar otras alternativas como "sweetalert"
    let ingreso = confirm("Desea continuar a la pagina?"); // Se recomienda usar otras alternativas como "sweetalert"
    if(ingreso == false){
        let h2 = document.querySelector("h2")
        h2.innerHTML +=  "Lamentamos que no quieras continuar tu visita por este maravilloso sitio" // Si el usuario presiona canelar en el confirm

    } else {
        let h2 = document.querySelector("h2")
        h2.innerHTML += "Qué alegría que quieras continuar tu visita por este maravilloso sitio." // Si el usuario presiona ok en el confirm

        let colorPreferido = prompt("Cual es tu color preferido? (En Ingles)");

        let nombre = prompt("Ingresa tu Nombre")
        if(nombre != ""){
            let h1 = document.querySelector("h1")
            h1.innerHTML = `Bienvenido <span class=“color-preferido”>${nombre}</span>` // Si lo que ingresa el usuario no es vacio se imprimira por pantalla lo que escriba
        }

        let edad = prompt("Ingresa tu Edad")
        if(edad >= 18){

            let hobbiesPrompt = prompt("Ingresa tus hobbies (deben estar separados por una coma). Ej: Netflix,Programación,Fútbol,Hockey") // Si es mayor ingresa sus hobbies
            let hobbies =  hobbiesPrompt.split(","); // Separa los hobbies, poniendolos en un array donde cada posicion se separa por la "",""
            let prog = ["programación", "programacion", "programar", "Programación", "Programacion", "Programar"] // Hobbies relacionados a la programacion
            let esProg = [] // Aqui se almacenaran los hobbies relacionados a programacion

            hobbies.forEach(hobbie => {
                if(prog.includes(hobbie)){  // Recorre los hobbies para ver si coinciden con la programacion (prog)
                    esProg.push(hobbie) // Si hay coincidencia pushea al array "esProg"
                }
            });

            if(esProg.length > 0){  // En caso de que "esProg" no este vacio, esto quiere decir que el usuario ingreso la programacion como hobbie
                alert("Qué bueno que te guste la programación.")
                
                let backgroundImg = document.querySelector("div.background-img")
                backgroundImg.innerHTML = `<img src="./img/programmer.jpeg" alt="programador">` // Mostramos la imagen de un programador

                let olHobbie = document.querySelector("ol") // IMPORTANTE NO PONERLE NOMBRE DE ETIQUETAS (ol, div, span, etc...) A LAS VARIABLES!
                let hobbiesImpresos = 0 // Contador de hobbies a imprimir por pantalla
                for(i=0; i<hobbies.length; i++){                               // Recorremos el array de hobbies e imprimimos hasta 3 de ellos
                    if(hobbies[i].length > 5 && hobbies[i].length < 10){
                        let url = prompt("Ingresa la url de tu hobbie") // Prompt para proporcionar la url del hobbie
                        olHobbie.innerHTML += `<li align="center"><a style="text-decoration:none; color:${colorPreferido}"  href="${url}"> ${hobbies[i]} </a></li>` // Imprimimos un li con el hobbie que cumpla las condiciones, la url del hobbie y le agregamos el color preferido que escribio el usuario antes
                        hobbiesImpresos ++ // Suma a hobbies impresos un numero por vuelta
                    }
                    if(hobbiesImpresos == 3){
                        break; // Una vez que hobbies impresos llegue a 3 la ejecucion frena
                    }
                }

                let img = document.querySelector('.avatar');
                let containerBienvenida = document.querySelector('.bienvenida')
                let imgUrl = prompt("Url de tu imagen")
                if(imgUrl != ""){ // En caso de que el prompt de imagen no este vacio se cambia el avatar generico por la imagen que suba el usuario
                    img.style.display = "none" // Escondemos el avatar generico
                    containerBienvenida.innerHTML += `<img class="avatar" src="${imgUrl}" alt="avatar" width="50px" height="50px">` // Imagen que subio el usuario
                }
                

            }else { // En caso de que "esProg" este vacio muestra lo siguiente
                alert("Qué lástima que no te guste la programación.")
                let backgroundImg = document.querySelector("div.background-img")
                backgroundImg.innerHTML = `<img src="./img/gatito.jpeg" alt="gato">` // Mostramos la imagen del gatito de Shrek
            }

            let nombrePelicula = prompt("Nombre de la pelicula");
            let linkPelicula = prompt("Link de IMDb")
            let directorPelicula = prompt("Director de la pelicula");
            let duracionPelicula = prompt("Duracion de la pelicula");
            let actorPelicula = prompt("Actor de la pelicula");

            let pelicula = {
                nombre: nombrePelicula,
                director: directorPelicula,
                duracion: duracionPelicula,
                actor: actorPelicula
            }

            peliculaHtml = document.querySelector('.contenido-bloqueado')

            if(nombrePelicula != ""){
                peliculaHtml.style.display = "flex"
                peliculaHtml.innerHTML = `
                    <h2 align="center">Pelicula Favorita</h2>
                    <ol>
                        <li align="center"> <a style="text-decoration:none" href="${linkPelicula}">${pelicula.nombre}</a> </li>
                        <li align="center"> ${pelicula.director} </li>
                        <li align="center"> ${pelicula.duracion} </li>
                        <li align="center"> ${pelicula.actor} </li>
                    </ol>
                `
            }

            
        }else {
            let containerGeneral = document.querySelector(".container-general")
            containerGeneral.style.display = "none"; // Si es menor de 18 no se mostrara nada
        }
    }
})