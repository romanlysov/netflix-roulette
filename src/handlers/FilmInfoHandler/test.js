import { fetchSameFilms } from '../FetchSameFilms'
import { FilmInfoHandler } from './index'
import { actions } from '../../actionNames'

jest.mock('../FetchSameFilms')
fetchSameFilms.mockImplementation(async (dispatch, genre) => {
  return
})

const dispatched = []
const filmMock = { data: 1, genres: 'drama' }
const dispatchMock = jest.fn(film => {
    dispatched.push(film)
})

describe('FilmInfoHandler test', ()=>{
  test('FilmInfoHandler calls fetchSameFilms', async()=> {
    await FilmInfoHandler(dispatchMock)(filmMock)
    expect(fetchSameFilms).toHaveBeenCalledWith(dispatchMock, expect.anything())
  })

  test('FilmInfoHandler dispatches filmObject and transferred payload', async()=> {
    await FilmInfoHandler(dispatchMock)(filmMock)
    expect(dispatched[1].type).toEqual(actions.filmObject)
    expect(dispatched[1].film.data).toEqual(1)
  })
})

