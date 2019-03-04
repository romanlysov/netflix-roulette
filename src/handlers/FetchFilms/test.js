import { fetchFilms } from './index'
import { actions } from '../../actionNames'

const dispatched = []

const dispatchMock = action => {
  dispatched.push(action)
}

test('fetchFilms', async () => {
  const fetch = jest.fn(async () => {
    return [{}]
  })
  await fetchFilms(dispatchMock, fetch)
  expect(fetch).toHaveBeenCalled()
  expect(dispatched[0].type).toEqual(actions.filmsDataAllInfo)
})
