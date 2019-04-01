import React from 'react'
import { reduxForm, Field } from 'redux-form'

// import { Input } from './Input'
import { SearchByPanel } from '../SearchByPanel'

import './style.scss'

const inputComponent = props => {
  const {
    className,
    input,
    meta: { error, touched }
  } = props
  return (
    <>
      <input {...input} type="text" className={className} />
      {touched && (error && <span className="main-search__error-message">{error}</span>)}
    </>
  )
}

const Form = ({
  className,
  onChange,
  onSubmit,
  value,
  searchBy,
  searchByActions,
  filter,
    handleSubmit
}) => {
  return (
    <form className={`${className} main-search`} onSubmit={handleSubmit(onSubmit)} >
      <h1 className="main-search__h1">Find your movie</h1>
      {/*<Input*/}
      {/*className="main-search__input"*/}
      {/*placeholder="Quentin Tarantino"*/}
      {/*onChange={onChange}*/}
      {/*value={value}*/}
      {/*/>*/}
      <Field
        name="search"
        component={inputComponent}
        onChange={onChange}
        value={value}
        className='main-search__input'
      />

      <div className="main-search__container">
        <SearchByPanel
          className="search-by"
          searchBy={searchBy}
          searchByActions={searchByActions}
          filter={filter}
        />
        <input
          type="submit"
          className="main-search__button"
          data-button="main__submit"
        />
      </div>
    </form>
  )
}

export const SearchForm = reduxForm({
  form: 'searchForm',
  validate: values => {
    const { search } = values
    const errors = {}
    if (!search) {
      errors.search = 'Please, fill in search field'
    }
    return errors
  }

})(Form)
