import { fetchSameFilms } from 'components/FetchSameFilms'
import { sameFilmInfoHandler } from './index'
import { actions } from '../../actionNames'
import { MovieInfoHandler } from '../MovieInfoHandler'

jest.mock('../MovieInfoHandler')
MovieInfoHandler.mockImplementation(dispatch => film => {
  dispatch(film)
})

jest.mock('components/FetchSameFilms')
fetchSameFilms.mockImplementation(async (dispatch, genre) => {
  return
})

const dispatched = []
const film = { data: 1, genres: 'drama' }
const dispatchMock = jest.fn(film => {
    dispatched.push(film)
})

test('sameFilmInfoHandler calls MovieInfoHandler', () => {
  sameFilmInfoHandler(dispatchMock)(film)
  expect(MovieInfoHandler).toHaveBeenCalled()
  expect(fetchSameFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())
  expect(dispatched[1].type).toEqual(actions.defineZoneClick)
  expect(dispatched[0].data).toEqual(1)

})
