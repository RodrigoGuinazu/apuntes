// No olvidar de que no se usa class para en los componentes si no que utilizamos className. Tampoco olvidar cerrar las etiquetas simples con un "/" al final.
import React from 'react'

function Footer() {
    return (
        <>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Dashboard 2020</span>
                    </div>
                </div>
            </footer>              
        </>
    )
}

export default Footer;