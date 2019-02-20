import React from 'react'

import { Header } from 'components/Header'
import { SearchSettings } from 'components/SearchSettings'
import { Footer } from 'components/Footer'
import { MainScreen } from '../MainScreen'
import { connect } from 'react-redux'

// Header className="movie-card" - for movie card markup
// Header className="search-result" - for search result markup

export class AppUnwrapped extends React.Component {
    render() {
        return (
            <>
                <Header className="search-result"/>
                <SearchSettings counter={this.props.filmsFoundQuantity} />
                <MainScreen/>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmsFoundQuantity: state.filmsFoundQuantity
    }
}

export const App = connect(mapStateToProps)(AppUnwrapped)
