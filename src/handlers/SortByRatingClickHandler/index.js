import { fetchFilms } from 'components/FetchFilms'
import { getFilms } from 'components/AsyncApp'
import { actionCreator } from '../../actions'
import { SortByParam } from '../../constants'

export const sortByRatingClickHandler = dispatch => async (searchByFilter, value) => {
  const sortBy = SortByParam.byRating
  dispatch(actionCreator.setSortByFilter(sortBy))
  await fetchFilms(
    dispatch,
    async () => await getFilms({ sortBy, value, searchByFilter })
  )
}

