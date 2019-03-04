import React from 'react'
import renderer from 'react-test-renderer'

import { Header } from 'components/Header/index'

jest.mock('../../containers/FormContainer')

const filmMock = {}

describe('Header', () => {
  test('renders Header for searchResults properly', () => {
    const wrapper = renderer.create(<Header />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  test('renders header for MovieCard properly', () => {
    const wrapper = renderer.create(<Header film={filmMock} />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
