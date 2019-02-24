import React from 'react'
import { connect } from 'react-redux'

import { SearchForm } from '../../components/Header/Form'
import { actionCreator } from '../../actions'
import { getFilms } from '../../components/GetFilms'
// import { filterSwitcher } from '../../components/Header/SearchByPanel/SearchByFilterSwitcher'

export class FormContainerUnwrapped extends React.Component {
    state = {
        value: '',
        titleChecked: true,
        chosenTitle: 'label-chosen',
        genreChecked: false,
        chosenGenre: ''

    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        const {value} = this.state
        const {searchByFilter, dispatch} = this.props
        event.preventDefault()
        dispatch(actionCreator.getSearchData(value))
        getFilms(this.props, `http://react-cdp-api.herokuapp.com/movies?search=${value}&${searchByFilter}`)
    }
    // handleSearchBySwitcher = (event) => {
    //     filterSwitcher(event, this.props)
    // }

    handleSearchByClick = (event) => {
        const { dispatch } = this.props
        switch (event.target.textContent) {
            case 'Title' :
                dispatch(actionCreator.setSearchByFilter('searchBy=title'))
                this.setState({titleChecked: true, genreChecked: false, chosenTitle: 'label-chosen',chosenGenre: ''  })
                break
            case 'Genre' :
                dispatch(actionCreator.setSearchByFilter('searchBy=genre'))
                this.setState({titleChecked: false, genreChecked: true, chosenTitle: '',chosenGenre: 'label-chosen' })
                break
            default: break
        }
    }

    render() {
        const { value, chosenTitle, chosenGenre, titleChecked, genreChecked } = this.state
        return <SearchForm
            className='header__form'
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={value}
            searchBy={this.handleSearchByClick}
            titleLabelClass={chosenTitle}
            genreLabelClass={chosenGenre}
            titleChecked={titleChecked}
            genreChecked={genreChecked}/>
    }
}

const mapStateToProps = (state) => {
    return {
        getSearchRequest: state.value,
        main_view_switch: state.mainViewsSwitch,
        filmsLoadingStatus: state.loadedFilmsInfo.filmsAreLoaded,
        filmsArray: state.loadedFilmsInfo.filmsArray,
        searchByFilter: state.searchRequest.searchByFilter
    }
}

export const FormContainer = connect(mapStateToProps)(FormContainerUnwrapped)
