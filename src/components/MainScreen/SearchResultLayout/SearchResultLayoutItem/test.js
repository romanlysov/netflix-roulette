import React from 'react'
import renderer from 'react-test-renderer'

import { SearchResultLayoutItem } from 'components/MainScreen/SearchResultLayout/SearchResultLayoutItem/index'

const itemMock = {
  poster_path: '',
  title: '',
  release_date: '',
  genres: ['']
}

test('SearchResultLayoutItem renders properly', () => {
  const wrapper = renderer
    .create(<SearchResultLayoutItem item={itemMock} />)
    .toJSON()
  expect(wrapper).toMatchSnapshot()
})
