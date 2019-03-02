import React from 'react'
import { connect } from 'react-redux'

import { getFilms } from '../../services/getFilms/getFilms'
import { SearchForm } from '../../components/Header/SearchForm'
import { actionCreator } from '../../actions'
import { fetchFilms } from '../../handlers/FetchFilms'
import { SearchStatus } from '../../constants'

export class FormContainerUnwrapped extends React.Component {
  state = {
    value: '',
    titleChecked: true,
    chosenTitle: 'label-chosen',
    genreChecked: false,
    chosenGenre: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = async event => {
    const { value } = this.state
    const { searchByFilter, dispatch, sortBy } = this.props
    event.preventDefault()
    dispatch(actionCreator.getSearchData(value))
    dispatch(actionCreator.setMainView(SearchStatus.showRequested))
    await fetchFilms(
      dispatch,
      async () => await getFilms({ sortBy, value, searchByFilter })
    )
  }

  handleSearchByClick = event => {
    const { dispatch } = this.props
    switch (event.target.textContent) {
      case 'Title':
        dispatch(actionCreator.setSearchByFilter('title'))
        this.setState({
          titleChecked: true,
          genreChecked: false,
          chosenTitle: 'label-chosen',
          chosenGenre: ''
        })
        break
      case 'Genre':
        dispatch(actionCreator.setSearchByFilter('genres'))
        this.setState({
          titleChecked: false,
          genreChecked: true,
          chosenTitle: '',
          chosenGenre: 'label-chosen'
        })
        break
      default:
        break
    }
  }

  render() {
    const {
      value,
      chosenTitle,
      chosenGenre,
      titleChecked,
      genreChecked
    } = this.state
    return (
      <SearchForm
        className="header__form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={value}
        searchBy={this.handleSearchByClick}
        titleLabelClass={chosenTitle}
        genreLabelClass={chosenGenre}
        titleChecked={titleChecked}
        genreChecked={genreChecked}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    getSearchRequest: state.SearchRequest.Text,
    main_view_switch: state.ScreenType,
    filmsLoadingStatus: state.FilmsInfo.AreLoaded,
    filmsArray: state.FilmsInfo.Array,
    searchByFilter: state.SearchRequest.SearchBy,
    sortBy: state.SearchRequest.SortBy
  }
}

export const FormContainer = connect(mapStateToProps)(FormContainerUnwrapped)
