import { fetchSameFilms } from '../FetchSameFilms'
import { sameFilmInfoHandler } from './index'
import { actions } from '../../actionNames'
import { MovieInfoHandler } from '../MovieInfoHandler'

jest.mock('../MovieInfoHandler')
MovieInfoHandler.mockImplementation(dispatch => film => {
  dispatch(film)
})

jest.mock('../../utils/FetchSameFilms')
fetchSameFilms.mockImplementation(async (dispatch, genre) => {
  return
})

const dispatched = []
const film = { data: 1, genres: 'drama' }
const dispatchMock = jest.fn(film => {
    dispatched.push(film)
})

describe('sameFilmInfoHandler test', ()=>{
  test('sameFilmInfoHandler calls MovieInfoHandler', async() => {
    await sameFilmInfoHandler(dispatchMock)(film)
    expect(MovieInfoHandler).toHaveBeenCalled()
  })

  test('sameFilmInfoHandler calls fetchSameFilms', async()=> {
    await sameFilmInfoHandler(dispatchMock)(film)
    expect(fetchSameFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())
  })

  test('sameFilmInfoHandler dispatches zoneClick and transferred payload', async()=> {
    await sameFilmInfoHandler(dispatchMock)(film)
    expect(dispatched[1].type).toEqual(actions.defineZoneClick)
    expect(dispatched[0].data).toEqual(1)
  })
})

