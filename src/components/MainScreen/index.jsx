import React from 'react'
import { connect } from 'react-redux'

import { NoResults } from 'components/MainScreen/NoResults'
import { SearchResultLayout } from 'components/MainScreen/SearchResult'
import { fetchFilms } from '../../handlers/FetchFilms'
import { ErrorBoundary } from '../../containers/ErrorBoundary'
import { getAllFilms } from '../../services/getFilms/getAllFilms'
import { MovieInfoHandler } from '../../handlers/MovieInfoHandler'
import { actionCreator } from '../../actions'

import './style.scss'

export class MainScreenUnwrapped extends React.Component {

  async componentDidMount() {
    const { sortBy, dispatch } = this.props
    await fetchFilms(dispatch, async () => await getAllFilms(sortBy))
  }

  onClickHandle = ({dataKey}) => {
    const { dispatch, filmsArray } = this.props
    dispatch(actionCreator.getClickedFilmInStore(filmsArray[dataKey]))
    MovieInfoHandler(dispatch)(filmsArray[dataKey])
    dispatch(actionCreator.setClickFromZoneFlag(false))
  }

  render() {
    const { filmsLoadingStatus, mainViewsSwitch, filmsArray } = this.props
    if (filmsLoadingStatus && mainViewsSwitch === 'showRequested') {
      return (
        <div className="main-screen">
          <ErrorBoundary>
            <SearchResultLayout
              films={filmsArray}
              onClick={this.onClickHandle}
            />
          </ErrorBoundary>
        </div>
      )
    }
    return <NoResults />
  }
}
const mapStateToProps = state => {
  return {
    mainViewsSwitch: state.mainViewsSwitch,
    filmsLoadingStatus: state.loadedFilmsInfo.filmsAreLoaded,
    filmsArray: state.loadedFilmsInfo.filmsArray,
    filmInfoChosen: state.filmInfo,
    filmKey: state.sameGenreFilms.filmKey,
    isClickFromSameFilms: state.sameGenreFilms.isClickFromSameFilms,
    sortBy: state.searchRequest.sortByFilter,
    film: state.chosenFilm.film
  }
}

export const MainScreen = connect(mapStateToProps)(MainScreenUnwrapped)
