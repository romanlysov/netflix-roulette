import { FormSubmitHandler } from './index'
import { actions } from '../../actionNames'
import { fetchFilms } from '../FetchFilms'

jest.mock('../FetchFilms')
fetchFilms.mockImplementation(async () => {
  return
})

test('FormSubmitHandler', async ()=> {
  const dispatched = []
  const eventMock = {
    preventDefault: () => {

    }
  }
  const valueMock = 'harry'
  const searchByFilterMock = 'title'
  const sortByMock = 'date'
  const dispatchMock = jest.fn(value => {
    dispatched.push(value)
  })
  await FormSubmitHandler(eventMock)(valueMock, searchByFilterMock, dispatchMock, sortByMock)
  expect(dispatched[0].type).toEqual(actions.searchDataAction)
  expect(fetchFilms).toBeCalledWith(dispatchMock, expect.anything())
})