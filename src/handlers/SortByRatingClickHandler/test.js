import { getFilms } from 'components/AsyncApp'
import { fetchFilms } from 'components/FetchFilms'
import { SortByParam } from '../../constants'
import { sortByRatingClickHandler } from './index'
import { actions } from '../../actionNames'

jest.mock('components/AsyncApp')
getFilms.mockImplementation(async () => {
  return [{}, {}]
})

jest.mock('components/FetchFilms')
fetchFilms.mockImplementation((dispatch, fetch) => {
  return
})

test('SortByRatingClickHandler', async () => {
  const dispatched = []
  const dispatchMock = jest.fn((action) => {
    dispatched.push(action)
  })
  const paramsMock = {
    dispatch: dispatchMock,
    searchByFilter: SortByParam.byRating,
    value: 'terminator'
  }
  await sortByRatingClickHandler(paramsMock)
  expect(dispatched[0].type).toEqual(actions.sortBySwitchAction)
  expect(fetchFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())

})
