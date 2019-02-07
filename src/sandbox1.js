import React from 'react';
import { render } from 'react-dom';
import logo_white_blue  from './images/logo_white_blue.svg';
const rootElement = document.getElementById('root1');
const logoElement = document.getElementById('logo');


const pushMessage = () => {
    console.log("you've pushed the button")
};

const App = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.message}</button>
        </div>
    )
};

const Logo = (props) => {
    return (
        <div>
            <img src={logo_white_blue} alt={props.alt} width="200px"/>
        </div>
    )
};

render(<App message="push me" onClick = {pushMessage} />, rootElement);
render(<Logo alt="логотип" />, logoElement );