import React from 'react';

import { Header } from '../Header';
import { SearchSettings} from '../SearchSettings'
import {MainScreen} from "../MainScreen";
import {Footer} from "../Footer";

//Header className="movie-card" - for movie card markup
//Header className="search-result" - for search result markup

export class App extends React.Component {
    render() {
        return (
            <>
            <Header className="movie-card"/>
            <SearchSettings counter="7"/>
            <MainScreen />
            <Footer/>
            </>
        )

    }
};



