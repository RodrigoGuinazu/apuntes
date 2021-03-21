import React from 'react'
let username = "Rodrigo";
let avatar = 'https://i.kym-cdn.com/entries/icons/original/000/031/003/cover3.jpg';

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <p>{username}</p>
            <a class="navbar-brand" href="#">
                <img 
                    src={avatar} width="30" height="30" 
                    class="d-inline-block align-top rounded-circle mr-3" />
                {}
            </a>
        </nav>
    )
}

export default Navbar