import React from 'react';
import { render } from 'react-dom';
import { Header } from '../Header';

export class App extends React.Component {
    render() {
        return (
            <Header className={'navigation'}/>
        )

    }
}