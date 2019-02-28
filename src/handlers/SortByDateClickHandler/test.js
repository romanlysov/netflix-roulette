import {getFilms} from 'components/AsyncApp'
import { fetchFilms } from 'components/FetchFilms'
import { sortByDateClickHandler } from './index'
import {actions} from '../../actionNames'

jest.mock('components/FetchFilms')
fetchFilms.mockImplementation(async (dispatch, fetch) => {
    return
})

jest.mock('components/AsyncApp')
getFilms.mockImplementation(({params}) => {
    return []
})
const dispatched = []
const dispatchMock = action => {
    dispatched.push(action)
}
const searchByFilterMock = 'date'
const valueMock = 'terminator'

describe('sortByDateClickHandler calls fetchFilms', ()=> {
    test('sortByDateClickHandler calls fetchFilms', () => {
    sortByDateClickHandler(dispatchMock)(searchByFilterMock, valueMock)
    expect(fetchFilms).toBeCalledWith(dispatchMock, expect.anything())
})

    test('sortByDateClickHandler dispatches action byDate', ()=>{
        sortByDateClickHandler(dispatchMock)(searchByFilterMock, valueMock)
        expect(dispatched[0].type).toEqual(actions.sortBySwitchAction)
    })
})