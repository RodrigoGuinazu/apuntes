window.addEventListener('load', function(e){

    // CATEGORY //

    // Fetch('url basica' + 'valor ingresado'? 'valor ingresado' : ''
    fetch('http://localhost:3000/api/products/') // Como hacer el fetch con un :?
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log('prueba')
    })
    .catch(function(error){
        console.log(error)
    })

})