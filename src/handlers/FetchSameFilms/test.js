import { fetchSameFilms } from './index'
import { actions } from '../../actionNames'
import { getFilms } from '../../services/getFilms/getFilms'

const dispatched = []

const dispatchMock = action => {
  dispatched.push(action)
}

jest.mock('../../services/getFilms/getFilms')
getFilms.mockImplementation(async () => {
  return [{}]
})

test('fetchSameFilms', async () => {
  const genre = 'drama'
  await fetchSameFilms(dispatchMock, genre)
  expect(getFilms).toHaveBeenCalled()
  expect(dispatched[0].type).toEqual(actions.sameGenreFilmsAction)
})
