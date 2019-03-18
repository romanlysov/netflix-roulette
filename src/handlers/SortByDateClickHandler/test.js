import { fetchFilms } from '../FetchFilms'
import { getFilms } from '../../services/getFilms/getFilms'
import { sortByDateClickHandler } from './index'
import { actions } from '../../actionNames'

jest.mock('../FetchFilms')
fetchFilms.mockImplementation(async () => {
  return
})

jest.mock('../../services/getFilms/getFilms')
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
