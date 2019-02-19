import React from 'react'

import { SearchForm } from '../../components/Header/Form'
import { connect } from 'react-redux'
import { getSearchData } from '../../actions'
import { getFilms } from '../../components/MainScreen'

export class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log(this.state.value)
        this.props.dispatch(getSearchData(this.state.value))
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?search=${this.state.value}&searchBy=title`)
        event.preventDefault()
    }
    render() {
        return <SearchForm className={'header__form'} onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value}/>
    }
}

const mapStateToProps = (state) => {
    return {
        getSearchRequest: state.value,
        main_view_switch: state.mainViewsSwitch,
        filmsLoadingStatus: state.filmsAreLoaded,
        filmsArray: state.filmsArray
    }
}

export const FormContainerWrapped = connect(mapStateToProps)(Index)
