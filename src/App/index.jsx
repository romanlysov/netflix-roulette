import React from 'react';
import { render } from 'react-dom';
import { Header } from '../Header';

export class App extends React.Component {
    render() {
        return <div>
            <Header className={'app_header'}/>
            {/*<SearchForm/>*/}
        </div>
    }
}