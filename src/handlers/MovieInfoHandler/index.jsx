import { actionCreator } from '../../actions'

export const MovieInfoHandler = dispatch => film => {
  dispatch(actionCreator.setMainFilmInfo(film))
}
