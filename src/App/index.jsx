import React from 'react';
import { Header } from '../Header';
import { SearchSettings} from '../SearchSettings'
import {MainScreen} from "../MainScreen";
import {Footer} from "../Footer";

export class App extends React.Component {
    render() {
        return (
            <>
            <Header className={'navigation'}/>
            < SearchSettings counter={7}/>
            <MainScreen className={"no-results"}/>
            <Footer/>
            </>
        )

    }
};