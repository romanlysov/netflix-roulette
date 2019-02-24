import { actionCreator } from '../../actions'
import { SearchStatus} from '../../constants'

export const MovieInfoHandler = (props, event) => {
    const { dispatch } = props
    const currentFilm = event.currentTarget
    const filmTitle = currentFilm.querySelector('.film-layout__title').innerHTML
    const filmKey = currentFilm.getAttribute('data-key')
    dispatch(actionCreator.setMainView(SearchStatus.showMovieInfo))
    dispatch(actionCreator.getMovieInfo(filmTitle))
    dispatch(actionCreator.setFilmKey(filmKey))
}