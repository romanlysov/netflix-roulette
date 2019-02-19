import React from 'react'
import { connect } from 'react-redux'

import { setMainView, noResults, showRequested } from '../../actions'

// import {filmsArray} from '../../../assets/data'

const showNoResults = () => (setMainView(noResults))
const showMovies = () => (setMainView(showRequested))

const mapDispatchToProps = (dispatch) => {
    return {
        showNoResults: () => dispatch(showNoResults()),
        showMovies: () => dispatch(showMovies()),
        dispatch
    }
}

export const Switcher = (props) => {
    return (
        <>
            <button
                onClick={props.showNoResults}
            >No Results</button>
            <button
                onClick={props.showMovies}
            >Show results</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        main_view_switch: state.mainViewsSwitch
    }
}

export const WrappedSwitcher = connect(mapStateToProps, mapDispatchToProps)(Switcher)
