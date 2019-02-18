import React from 'react'
import { connect } from 'react-redux'

import { NO_RESULTS } from '../../actions'
import { NoResults } from '../../components/MainScreen/NoResults'
import { filmsArray } from '../../../assets/data'
import { SearchResultLayout } from '../../components/MainScreen/SearchResult'

export const MainScreenContainer = (props) => {
    if (props.main_view_switch === NO_RESULTS) {
        return <NoResults/>
    } return <SearchResultLayout films={filmsArray}/>
}

const mapStateToProps = (state) => {
    return {
        main_view_switch: state.MAIN_VIEW_SWITCH
    }
}

export const WrappedMainScreenContainer = connect(mapStateToProps)(MainScreenContainer)

