import { fetchFilms } from 'components/FetchFilms'
import { getFilms } from 'components/AsyncApp'
import { actionCreator } from '../../actions'
import { SortByParam } from '../../constants'

export const sortByRatingClickHandler = async params => {
  const { dispatch, searchByFilter, value } = params
  dispatch(actionCreator.setSortByFilter(SortByParam.byRating))
  const sortBy = SortByParam.byRating
  await fetchFilms(
    dispatch,
    async () => await getFilms({ sortBy, value, searchByFilter })
  )
}

