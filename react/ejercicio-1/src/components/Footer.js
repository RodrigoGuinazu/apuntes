import React from 'react'
import FooterLinks from './FooterLinks'

function Footer() {
    return (
        <footer>
            <div class="row text-center text-xs-center text-sm-left text-md-left bg-light">
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
            </div>
        </footer>
    )
}

export default Footer

