import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchForm } from '../../components/Header/SearchForm'
import { actionCreator } from '../../actions'
import { FormSubmitHandler } from '../../handlers/FormSubmitHandler'
import {fullRequestSelector, screenSelector, formFilmsInfoSelector, formClassSelector} from '../../selectors'


export class FormContainerUnwrapped extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = async event => {
    const { value } = this.state
    const { searchBy, dispatch, sortBy, history } = this.props
    await FormSubmitHandler(event)(value, searchBy, dispatch, sortBy)
    const valueEncoded = encodeURI(value)
    history.push(`/filter/?search=${valueEncoded}&searchBy=${searchBy}`)
  }

  render() {
    const { value } = this.state
    const {
      searchByTitleHandle,
      searchByGenreHandle,
      searchBy,
      formClass
    } = this.props
    return (
      <SearchForm
        className={formClass}
        onChange={this.handleChange}
        sortByTitle={searchByTitleHandle}
        sortByGenre={searchByGenreHandle}
        filter={searchBy}
        onSubmit={this.handleSubmit}
        value={value}
      />
    )
  }
}

const mapStateToProps = createSelector(
    [fullRequestSelector, screenSelector, formFilmsInfoSelector, formClassSelector],
    (searchParams, screenType, filmsInfo, formClass ) => ({
      ...searchParams,
      ...screenType,
      ...filmsInfo,
      ...formClass
    })
)

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
