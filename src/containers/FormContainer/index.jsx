import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { SearchForm } from '../../components/SearchForm'
import { actionCreator } from '../../actions'
import {
  fullRequestSelector,
  screenSelector,
  formFilmsInfoSelector,
  formClassSelector
} from '../../selectors'

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
    event.preventDefault()
    dispatch(actionCreator.initiate.triggerFormSubmit(value, searchBy, sortBy))
    const valueEncoded = encodeURI(value)
    history.push(`/filter/?search=${valueEncoded}&searchBy=${searchBy}`)
  }

  render() {
    const { value } = this.state
    const {
      searchByActions,
      searchBy,
      formClass
    } = this.props
    return (
      <SearchForm
        className={formClass}
        onChange={this.handleChange}
        searchByActions={searchByActions}
        filter={searchBy}
        onSubmit={this.handleSubmit}
        value={value}
      />
    )
  }
}

const mapStateToProps = createSelector(
  [
    fullRequestSelector,
    screenSelector,
    formFilmsInfoSelector,
    formClassSelector
  ],
  (searchParams, screenType, filmsInfo, formClass) => ({
    ...searchParams,
    ...screenType,
    ...filmsInfo,
    ...formClass
  })
)

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    searchByActions: {
      searchByTitleHandle: () => {
        dispatch(actionCreator.search.searchFilter('title'))
      },
      searchByGenreHandle: () => {
        dispatch(actionCreator.search.searchFilter('genres'))
      }
    }
  }
}

export const FormContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormContainerUnwrapped)
)
