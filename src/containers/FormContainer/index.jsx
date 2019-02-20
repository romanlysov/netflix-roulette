import React from 'react'

import { SearchForm } from '../../components/Header/Form'
import { connect } from 'react-redux'
import { actionCreator } from '../../actions'
import { getFilms } from '../../components/GetFilms'
import { filterSwitcher } from '../../components/Header/SearchByPanel/SearchByFilterSwitcher'

export class FormContainerUnwrapped extends React.Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        this.props.dispatch(actionCreator.getSearchData(this.state.value))
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?search=${this.state.value}&${this.props.searchByFilter}`)
        event.preventDefault()
    }
    handleSearchBySwitcher = (event) => {
       filterSwitcher(event, this.props)
    }
    render() {
        return <SearchForm className={'header__form'} onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} searchBy={this.handleSearchBySwitcher}/>
    }
}

const mapStateToProps = (state) => {
    return {
        getSearchRequest: state.value,
        main_view_switch: state.mainViewsSwitch,
        filmsLoadingStatus: state.filmsAreLoaded,
        filmsArray: state.filmsArray,
        searchByFilter: state.searchByFilter
    }
}

export const FormContainer = connect(mapStateToProps)(FormContainerUnwrapped)
