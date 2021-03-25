import React from 'react'

function MenuTitles(props) {
    return (
        <>
            <li className={props.clase}>
                <a className="nav-link" href="/">
                    <i className={props.icon}></i>
                    <span>{props.title}</span>
                </a>
            </li>    
        </>
    )
}

export default MenuTitles