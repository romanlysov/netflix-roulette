import React from 'react';

import netflix_logo from '../../assets/images/netflix_logo.png';
import './style.scss';

export const MainLogo = ({className}) => {
    return <img className={className} src={netflix_logo} alt="" />
};