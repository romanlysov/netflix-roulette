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


