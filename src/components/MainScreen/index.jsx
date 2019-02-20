import React from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { connect } from 'react-redux'
import { SearchResultLayout } from './SearchResult'
import { NoResults } from './NoResults'
import { getFilms } from '../GetFilms'

import './style.scss'

export class MainScreenUnwrapped extends React.Component {
    componentDidMount() {
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?searchBy=title`)
    }
    render() {
        if (this.props.filmsLoadingStatus && (this.props.main_view_switch === 'showRequested')) {
            return (
                <div className={'main-screen'}>
                    <ErrorBoundary>
                         <SearchResultLayout films={this.props.filmsArray}/>
                    </ErrorBoundary>
                </div>
            )
        } else {
            return <NoResults/>
        }
    }
}
const mapStateToProps = (state) => {
    return {
        main_view_switch: state.mainViewsSwitch,
        filmsLoadingStatus: state.filmsAreLoaded,
        filmsArray: state.filmsArray
    }
}
export const MainScreen = connect(mapStateToProps)(MainScreenUnwrapped)
