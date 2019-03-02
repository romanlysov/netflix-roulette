import { fetchFilms } from '../FetchFilms'
import { getFilms } from '../../services/getFilms/getFilms'
import { actionCreator } from '../../actions'
import { SortByParam } from '../../constants'

export const sortByDateClickHandler = dispatch => async (
  searchByFilter,
  value
) => {
  const sortBy = SortByParam.byDate
  dispatch(actionCreator.setSortByFilter(sortBy))
  await fetchFilms(
    dispatch,
    async () => await getFilms({ sortBy, value, searchByFilter })
  )
}
