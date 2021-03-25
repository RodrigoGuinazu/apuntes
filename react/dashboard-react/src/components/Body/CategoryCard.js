// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'

// VER COMO HACER PARA QUE EL CONTENIDO CAMBIE!

function CategoryCard(props) {
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">       
                        {props.title}
                    </div>
                </div>
            </div>          
        </>
    )
}

export default CategoryCard
