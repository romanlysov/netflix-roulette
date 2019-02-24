import { sameFilmInfoHandler } from './index'
import { actionCreator } from '../../actions'
import { test5 } from './index'
import { sameFilmInfoHandler1 } from './index';

// jest.mock('../MovieInfoHandler');
// const MovieInfoHandlerMock = require('../MovieInfoHandler');
// console.log(MovieInfoHandlerMock)
// MovieInfoHandlerMock.mockImplementation(() => {
//     return {
//         MovieInfoHandler: () => {return 42},
//     };
// });
//
//
// test('sameFilmInfoHandler', async () => {
//     expect(test5()).toEqual(42)
// })
test('MovieInfoHandler 1', () => {
  const MovieInfoHandlerMock = () => 42
  expect(test5(MovieInfoHandlerMock)).toEqual(42)
})

test('sameFilmInfoHandler 1', async() => {
    const eventMock = {
        dataKey: 3
    }
    const dispatched = []
    const dispatchMock = (action) => {
        dispatched.push(action)
    }

    const paramsMock = {
        dispatch: dispatchMock,
        sameGenreFilms: [{}, {}, {}, {}],
        genre: 'drama'
    }
    let fetchFilmsSuccess = false
    const fetchSameFilmsMock = async (dispatch, genre) => {
        fetchFilmsSuccess = (dispatch === dispatchMock && genre === paramsMock.genre)
        return
    }
    let moveInfoHandlerSuccess = false
    const MovieInfoHandlerMock = (params, event) => {
        moveInfoHandlerSuccess = (params === paramsMock && event === eventMock)
        return
    }
    await sameFilmInfoHandler1(eventMock, paramsMock, fetchSameFilmsMock, MovieInfoHandlerMock)
    expect(moveInfoHandlerSuccess).toEqual(true)
    expect(fetchFilmsSuccess).toEqual(true)
    expect(dispatched.length).toEqual(4)
})
