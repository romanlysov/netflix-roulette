import React from 'react'
import { connect } from 'react-redux'

import { setMainView, NO_RESULTS, SHOW_REQUESTED } from '../../actions'

// import {filmsArray} from '../../../assets/data'

const showNoResults = () => (setMainView(NO_RESULTS))
const showMovies = () => (setMainView(SHOW_REQUESTED))

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
        main_view_switch: state.MAIN_VIEW_SWITCH
    }
}

export const WrappedSwitcher = connect(mapStateToProps, mapDispatchToProps)(Switcher)
