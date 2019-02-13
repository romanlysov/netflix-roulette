import React from 'react'

import netflixLogo from '../../assets/images/netflix_logo.png'
import './style.scss'

export const MainLogo = ({className}) => {
    return <img className={className} src={netflixLogo} alt="" />
}
