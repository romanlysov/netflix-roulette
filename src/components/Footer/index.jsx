import React from 'react'

import { MainLogo } from 'components/MainLogo'

import './style.scss'

export const Footer = () => {
    return <footer className='footer'>
        <MainLogo className='footer__logo'/>
        <p>All rights reserved, 2021</p>
        </footer>
}
