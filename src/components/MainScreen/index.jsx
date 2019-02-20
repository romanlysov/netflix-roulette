import React from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { actionCreator, showRequested } from '../../actions'
import { connect } from 'react-redux'
import { SearchResultLayout } from './SearchResult'
import { NoResults } from './NoResults'

import axios  from 'axios'

import './style.scss'

export const getFilms = (props, url) => {
    axios.get(url).then((response) => {
        props.dispatch(actionCreator.setFilmsLoadingStatus(true))
        props.dispatch(actionCreator.getFilmsData(response.data.data))
        props.dispatch(actionCreator.setMainView(showRequested))
    })
    console.log(url)
}

export class MainScreen extends React.Component {
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
export const MainScreenContainer1 = connect(mapStateToProps)(MainScreen)
