window.addEventListener('load', function(e){
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
                            ${information.data[i].discount > 0 ? `<span> ${information.data[i].discount} % OFF </span>` : null }                          
                            <p>${information.data[i].name}</p>
                            <i class="fas fa-truck"></i>
                        </article>
                    </a>
                </section>
            </div>
            `

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


    // OFFERS //
    
    fetch('http://localhost:3000/api/products/offers')
    .then(function(response){
        return response.json()
    })
    .then(function(information){
        // GUARDO LOS PRODUCTOS COMO OBJETOS DENTRO DEL ARRAY "inSale" QUE ESTA DECLARADO ARRIBA
        let inSale = []

        for(i=0; i < information.data.length; i++){
            product = {
                id: information.data[i].id,
                name: information.data[i].name,
                price: information.data[i].price,
                discount: information.data[i].discount,
                image: information.data[i].image,  
            }
            inSale.push(product)
        }

        console.log(inSale)
        // GUARDO LOS PRODUCTOS COMO OBJETOS DENTRO DEL ARRAY "inSale" QUE ESTA DECLARADO ARRIBA

        let offers = document.getElementById('offers-products')

        if(inSale.length > 0){ // EN CASO DE QUE inSale NO ESTE VACIO
            for(i=0; i < information.data.length; i++){ // HAGO UN FOR PARA ITERAR TODAS LAS POSICIONES DEL ARRAY inSale
                offers.innerHTML += `
                <div class="col-12 col-sm-6 col-lg-3">
                    <section class="product-box">
                        <a href="/products/detail/${information.data[i].id}">
                            <figure class="product-box_image">
                                <img src="/images/products/${information.data[i].image}" alt="${information.data[i].name}">
                            </figure>
                            <article class="product-box_data">
                                <h2>$${information.data[i].price - information.data[i].price * information.data[i].discount / 100}</h2>
                                <span>${information.data[i].discount} % OFF</span>
                                <p>${information.data[i].name}</p>
                                <i class="fas fa-truck"></i>
                            </article>
                        </a>
                    </section>
                </div>
                `
            }
        }else { // EN CASO DE QUE EL ARRAY inSale ESTE VACIO
            offers.innerHTML += `<div class="col-12"><h2 class="noproducts">Aun se encontraron productos</h2></div>`
        }
    })
    .catch(function(error){
        console.log(error)
    })
})
 