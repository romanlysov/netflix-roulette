import React from 'react'
import { connect } from 'react-redux'

import { setVisibility, NO_RESULTS, SHOW_REQUESTED } from '../../actions'

// import {filmsArray} from '../../../assets/data'

export const Switcher = (props) => {
    return (
        <>
            <button
                onClick={() => {
                    props.dispatch(setVisibility(NO_RESULTS))
                }}
            >No Results</button>
            <button
                onClick={() => {
                    props.dispatch(setVisibility(SHOW_REQUESTED))
                }}
            >Show results</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        visibility: state.VISIBILITY
    }
}

export const WrappedSwitcher = connect(mapStateToProps)(Switcher)
