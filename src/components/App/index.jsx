import React from 'react'

import { Header } from 'components/Header'
import { SearchSettings } from 'components/SearchSettings'
import { Footer } from 'components/Footer'
// import { AsyncAppContainer } from '../../containers/AsyncApp'
import { MainScreenContainer1 } from '../MainScreen'

// Header className="movie-card" - for movie card markup
// Header className="search-result" - for search result markup

export class App extends React.Component {
    render() {
        return (
            <>
                <Header className="search-result"/>
                <SearchSettings counter="7"/>
                <MainScreenContainer1/>
                {/* <AsyncAppContainer/> */}
                <Footer/>
            </>
        )
    }
}
