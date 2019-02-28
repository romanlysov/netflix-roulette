import { getFilms } from 'components/AsyncApp'
import { fetchFilms } from 'components/FetchFilms'
import { sortByDateClickHandler } from './index'
import { actions } from '../../actionNames'

jest.mock('components/FetchFilms')
fetchFilms.mockImplementation(async (dispatch, fetch) => {
  return
})

jest.mock('components/AsyncApp')
getFilms.mockImplementation(() => {
  return []
})
const dispatched = []
const dispatchMock = action => {
  dispatched.push(action)
}

describe('sortByDateClickHandler calls fetchFilms', () => {
  test('sortByDateClickHandler calls fetchFilms', async () => {
    await sortByDateClickHandler(dispatchMock)()
    expect(fetchFilms).toBeCalledWith(dispatchMock, expect.anything())
  })

  test('sortByDateClickHandler dispatches action byDate', async () => {
    await sortByDateClickHandler(dispatchMock)()
    expect(dispatched[0].type).toEqual(actions.sortBySwitchAction)
  })
})
