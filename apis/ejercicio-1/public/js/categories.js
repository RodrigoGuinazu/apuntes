window.addEventListener('load', function(e){

    // CATEGORIES //

    fetch('http://localhost:3000/api/products/categories')
    .then(function(response){
        return response.json()
    })
    .then(function(information){

        let categoriesList = document.querySelector('article.product-detail-info')

        for(i=0; i<information.data.length; i++){ // IMPRIMIENDO POR PANTALLA LAS CATEGORIAS
            categoriesList.innerHTML += `
                <a class="links" href="/products/categories/${information.data[i].name}">
                    <h2 class="product-detail-title categories" style="font-size: 15px; cursor: pointer;" id=${information.data[i].name}>
                        ${information.data[i].name}
                    </h2>
                </a>
            <hr>
            `
        }
        console.log(information.data)
    })
    .catch(function(error){
        console.log(error)
    })

    // CATEGORY //

    let outdoors = document.getElementById('Outdoors')
    console.log(outdoors) // FIJARSE PORQUE DA NULL?
    let computers = document.getElementById('Computers')
    let industrial = document.getElementById('Industrial')
    let home = document.getElementById('Home')
    let tools = document.getElementById('Tools')
    let garden = document.getElementById('Garden')
    let toys = document.getElementById('Toys')
    let music = document.getElementById('Music')
    let shoes = document.getElementById('Shoes')

    fetch('http://localhost:3000/api/products/:category?') // Como hacer el fetch con un :?
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        console.log('prueba')
    })
    .catch(function(error){
        console.log(error)
    })

    // LATEST //
    
    fetch('http://localhost:3000/api/products/latest')
    .then(function(response){
        return response.json()
    })
    .then(function(information){

        let latest = document.getElementById('latest-products')

        let ultimos = []
        for(i=0; i < information.data.length; i++){

            latest.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-3">
                <section class="product-box">
                    <a href="/products/detail/${information.data[i].id}">
                        <figure class="product-box_image">
                            <img class="latest" src="/images/products/${information.data[i].image}" alt="${information.data[i].name}">
                        </figure>
                        <article class="product-box_data">
                            <h2>${information.data[i].price - information.data[i].price * information.data[i].discount / 100}</h2>

                            
                            <span>${information.data[i].discount} % OFF</span>
                            
                            
                            <p>${information.data[i].name}</p>
                            <i class="fas fa-truck"></i>
                        </article>
                    </a>
                </section>
            </div>
            `

            /*
                VER COMO AGREGAR EL IF DENTRO DEL INNER HTML PARA QUE EL DESCUENTO NO APAREZCA SI ES 0 Y COMO REDONDEAR LOS PRECIOS

                <% if(${information.data[i].discount} > 0) { %>
                <% } %>
            */

        // GUARDO LOS PRODUCTOS COMO OBJETOS DENTRO DEL ARRAY "ultimos" QUE ESTA DECLARADO ARRIBA

            product = {
                id: information.data[i].id,
                name: information.data[i].name,
                price: information.data[i].price,
                discount: information.data[i].discount,
                image: information.data[i].image,  
            }
            ultimos.push(product)
        }
        console.log(ultimos)

        // GUARDO LOS PRODUCTOS COMO OBJETOS DENTRO DEL ARRAY "ultimos" QUE ESTA DECLARADO ARRIBA

    })
    .catch(function(error){
        console.log(error)
    })
})