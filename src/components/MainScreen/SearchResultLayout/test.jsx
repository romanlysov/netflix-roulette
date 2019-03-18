import React from 'react'
import renderer from 'react-test-renderer'

import { SearchResultLayout } from 'components/MainScreen/SearchResultLayout/index'

const filmsMock = [
  {
    id: '',
    genres: ['']
  }
]

test('SearchResultLayout', () => {
  const wrapper = renderer
    .create(<SearchResultLayout films={filmsMock} />)
    .toJSON()
  expect(wrapper).toMatchSnapshot()
})
