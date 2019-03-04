import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { App } from '../App'
// import { actionCreator } from '../../actions'
import { getFilmById } from '../../services/getFilms/getFilmById'
import { fetchFilmById } from '../../handlers/FetchFilmById'
import { actionCreator } from '../../actions'
import { fetchMoreFilmsById } from '../../handlers/FetchMoreFilmsById'
import { getFilms } from '../../services/getFilms/getFilms'

class AppFilmUnwrapped extends React.Component {
  async componentDidMount() {
    const { IsInitialized } = this.props
    if (!IsInitialized) {
      const { dispatch, sortBy, searchBy, match } = this.props
      dispatch(actionCreator.setInitialized(true))
      const id = match.params.id

      const film = await getFilmById(id)
      const genre = film.genres[0]
      await fetchFilmById(dispatch, async () => film )
      await fetchMoreFilmsById(
        dispatch,
        async () => await getFilms({ sortBy, value:genre, searchBy })
      )
    }
    // флаг о том, что initialized 1 раз
    // получить id
    // проверить, если ли id в массиве

    //хендлер который дистпатчит в стор
  }
  render() {
    return <App />
  }
}

const mapStateToProps = state => {
  return {
    IsInitialized: state.IsInitialized,
    film: state.ChosenFilm.Film,
    genre: state.ChosenFilm.Genre,
    sortBy: state.SearchRequest.SortBy,
    searchBy: state.SearchRequest.SearchBy
  }
}

export const AppFilm = withRouter(connect(mapStateToProps)(AppFilmUnwrapped))
