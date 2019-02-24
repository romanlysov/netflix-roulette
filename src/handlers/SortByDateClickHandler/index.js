import { fetchFilms } from 'components/FetchFilms';
import { getFilms } from 'components/AsyncApp';
import { actionCreator } from '../../actions';
import { SortByParam } from '../../constants';

export const sortByDateClickHandler = async (params) => {
    const { dispatch, searchByFilter, value } = params
    dispatch(actionCreator.setSortByFilter(SortByParam.byDate))
    const sortBy = SortByParam.byDate
    await fetchFilms(dispatch, async () => await getFilms({sortBy, value, searchByFilter }) )
}