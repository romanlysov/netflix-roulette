import React from 'react';
import { render } from 'react-dom';
const rootElement = document.getElementById('root1');


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

render(<App message="push me" onClick = {pushMessage} />, rootElement);
