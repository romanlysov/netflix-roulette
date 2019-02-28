import { MovieInfoHandler } from './index'
import { actions } from '../../actionNames'

const dispatched = []

const dispatchMock = jest.fn(film => {
    dispatched.push(film)
})

const filmMock = {
    film: {
        title: ''
    },
    genres: ['']

}

test('MovieInfoHandler', ()=> {
    MovieInfoHandler(dispatchMock)(filmMock)
    expect(dispatched[0].type).toEqual(actions.filmObject)
})