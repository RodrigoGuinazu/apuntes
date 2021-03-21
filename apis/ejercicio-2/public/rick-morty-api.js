window.addEventListener('load', function(e){
    fetch('http://localhost:3000/characters') // Consumimos la api traida por Axios
    .then(function(response){
        return response.json();
    })
    .then(function(information){
        divRam = document.querySelector('div.ram');

        for(i=0; i < information.length; i++){
            divRam.innerHTML += `
                <h2>Name: ${information[i].name}</h2>
                <h2>Species: ${information[i].species}</h2>
                <img src="${information[i].image}">
            `
        }
    })
    .catch(function(error){
        console.log(error);
    })

})