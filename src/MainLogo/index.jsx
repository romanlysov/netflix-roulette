import React from 'react';
import './style.scss';
import netflix_logo from '../images/netflix_logo.png';

export const MainLogo = (props) => {
    return <img className={props.className} src={netflix_logo} alt="" />
};