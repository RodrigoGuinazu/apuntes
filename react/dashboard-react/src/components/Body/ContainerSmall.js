// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'

// VER COMO HACER PARA QUE EL CONTENIDO CAMBIE!

function ContainerSmall(props) {
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className={props.color}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={props.colorText}> {props.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                            </div>
                            <div className="col-auto">
                                <i className={props.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default ContainerSmall