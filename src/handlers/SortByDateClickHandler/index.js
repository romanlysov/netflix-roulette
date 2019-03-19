import { fetchFilms } from '../FetchFilms'
import { actionCreator } from '../../actions'
import { SortByParam } from '../../constants'
import { getFilms } from '../../services/getFilms/getFilms'
import { getAllFilms } from '../../services/getFilms/getAllFilms'

export const sortByDateClickHandler = dispatch => async (searchByFilter,
                                                           value
) => {
  const sortBy = SortByParam.byDate
  dispatch(actionCreator.setSortByFilter(sortBy))
  await fetchFilms(
    dispatch,
    async () => await getFilms({sortBy, value, searchByFilter})
  )
}

export const sortByDateDefaultHandler = dispatch => async (
) => {
  const sortBy = SortByParam.byDate
  dispatch(actionCreator.setSortByFilter(sortBy))
  await fetchFilms(
      dispatch,
      async () => await getAllFilms({sortBy})
  )
}
