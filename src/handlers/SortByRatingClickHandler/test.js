import { fetchFilms } from '../FetchFilms'
import { getFilms } from '../../services/getFilms/getFilms'
import { sortByRatingClickHandler } from './index'
import { actions } from '../../actionNames'

jest.mock('../../utils/getFilms')
getFilms.mockImplementation(async () => {
  return [{}, {}]
})

jest.mock('../../utils/FetchFilms')
fetchFilms.mockImplementation((dispatch, fetch) => {
  return
})

const dispatched = []
const dispatchMock = jest.fn((action) => {
  dispatched.push(action)
})

describe('SortByRatingClickHandler', ()=> {
  test('SortByRatingClickHandler calls fetchFilms', async () => {
    await sortByRatingClickHandler(dispatchMock)()
    expect(fetchFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())

  })

  test('SortByRatingClickHandler dispatches sortBySwitchAction', async ()=> {
    await sortByRatingClickHandler(dispatchMock)()
    expect(dispatched[0].type).toEqual(actions.sortBySwitchAction)

  })
})


