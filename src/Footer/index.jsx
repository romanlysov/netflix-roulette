import React from 'react';
import './style.scss';
import {MainLogo} from "../MainLogo";

export const Footer = () => {
    return <footer className={"footer"}>
        <MainLogo className={"footer__logo"}/>
    </footer>
};