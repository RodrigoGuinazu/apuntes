// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'

// VER COMO HACER PARA QUE EL CONTENIDO CAMBIE!

function ContainerBig(props) {
    return (
        <>					
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                </div>
                {props.children}
            </div>      
        </>
    )
}

export default ContainerBig