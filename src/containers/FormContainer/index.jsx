import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { SearchForm } from '../../components/Header/SearchForm'
import { actionCreator } from '../../actions'
import { FormSubmitHandler } from '../../handlers/FormSubmitHandler'
import { SearchStatus, FormClass } from '../../constants'

export class FormContainerUnwrapped extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = async event => {
    const { value } = this.state
    const { searchByFilter, dispatch, sortBy, history } = this.props
    await FormSubmitHandler(event)(value, searchByFilter, dispatch, sortBy)
    const valueEncoded = encodeURI(value)
    history.push(`/filter/?search=${valueEncoded}&searchBy=${searchByFilter}`)
  }

  render() {
    const { value } = this.state
    const {
      searchByTitleHandle,
      searchByGenreHandle,
      searchByFilter,
      formClass
    } = this.props
    return (
      <SearchForm
        className={formClass}
        onChange={this.handleChange}
        sortByTitle={searchByTitleHandle}
        sortByGenre={searchByGenreHandle}
        filter={searchByFilter}
        onSubmit={this.handleSubmit}
        value={value}
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
    sortBy: state.SearchRequest.SortBy,
    formClass:
      state.ScreenType === SearchStatus.showMovieInfo || state.ScreenType === SearchStatus.notFound
        ? FormClass.hidden
        : FormClass.default
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    searchByTitleHandle: () => {
      dispatch(actionCreator.setSearchByFilter('title'))
    },
    searchByGenreHandle: () => {
      dispatch(actionCreator.setSearchByFilter('genres'))
    }
  }
}

export const FormContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormContainerUnwrapped)
)
