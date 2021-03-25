// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'
import CategoryCard from './CategoryCard'
import ContainerBig from './ContainerBig'
import ContainerSmall from './ContainerSmall'

// VER COMO HACER PARA QUE EL CONTENIDO DE LOS CONTAINER BIG Y SMALL CAMBIE!

function Body() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                <ContainerSmall title="PRODUCTS IN DATA BASE" number="135" icon="fas fa-clipboard-list fa-2x text-gray-300" color="card border-left-primary shadow h-100 py-2" colorText="text-xs font-weight-bold text-primary text-uppercase mb-1"/>
                <ContainerSmall title="AMOUNT IN PRODUCTS" number="$546.456" icon="fas fa-dollar-sign fa-2x text-gray-300" color="card border-left-success shadow h-100 py-2" colorText="text-xs font-weight-bold text-success text-uppercase mb-1"/>
                <ContainerSmall title="USERS QUANTITY" number="38" icon="fas fa-user-check fa-2x text-gray-300" color="card border-left-warning shadow h-100 py-2" colorText="text-xs font-weight-bold text-warning text-uppercase mb-1"/>
            </div>
            <div className="row">

            <div className="col-lg-6 mb-4">
                
                        <ContainerBig title="Last product in Data Dase">
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="/images/product_dummy.svg" alt="dummy" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                <a target="_blank" rel="nofollow" href="/">View product detail</a>
                            </div>
                        </ContainerBig>
                
            </div>  

                <div className="col-lg-6 mb-4">
                    <ContainerBig title="Categories in Data Base">
                        <div className="card-body">
                            <div className="row">
                                <CategoryCard title="Category 01"/>
                                <CategoryCard title="Category 02"/>
                                <CategoryCard title="Category 03"/>
                                <CategoryCard title="Category 04"/>
                                <CategoryCard title="Category 05"/>
                                <CategoryCard title="Category 06"/>
                            </div>
                        </div>
                    </ContainerBig>       
                </div>
            </div>
        </>
    )
}

export default Body