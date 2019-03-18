import { fetchFilms } from '../FetchFilms'
import { actionCreator } from '../../actions'
import { SortByParam } from '../../constants'
import { getAllFilms } from '../../services/getFilms/getAllFilms'

export const sortByDateClickHandler = dispatch => async (
) => {
  const sortBy = SortByParam.byDate
  dispatch(actionCreator.setSortByFilter(sortBy))
  await fetchFilms(
    dispatch,
    async () => await getAllFilms(sortBy)
  )
}
