import { fetchSameFilms } from '../FetchSameFilms'
import { FilmInfoHandler } from './index'
import { actions } from '../../actionNames'
import { MovieInfoHandler } from '../MovieInfoHandler'

jest.mock('../MovieInfoHandler')
MovieInfoHandler.mockImplementation(dispatch => film => {
  dispatch(film)
})

jest.mock('../FetchSameFilms')
fetchSameFilms.mockImplementation(async (dispatch, genre) => {
  return
})

const dispatched = []
const film = { data: 1, genres: 'drama' }
const dispatchMock = jest.fn(film => {
    dispatched.push(film)
})

describe('FilmInfoHandler test', ()=>{
  test('FilmInfoHandler calls MovieInfoHandler', async() => {
    await FilmInfoHandler(dispatchMock)(film)
    expect(MovieInfoHandler).toHaveBeenCalled()
  })

  test('FilmInfoHandler calls fetchSameFilms', async()=> {
    await FilmInfoHandler(dispatchMock)(film)
    expect(fetchSameFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())
  })

  test('FilmInfoHandler dispatches zoneClick and transferred payload', async()=> {
    await FilmInfoHandler(dispatchMock)(film)
    expect(dispatched[1].type).toEqual(actions.defineZoneClick)
    expect(dispatched[0].data).toEqual(1)
  })
})

