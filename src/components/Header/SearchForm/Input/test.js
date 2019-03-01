import React from 'react'
import renderer from 'react-test-renderer'

import { Input } from 'components/Header/SearchForm/Input/index'

test('renders Input properly', () => {
  const wrapper = renderer.create(<Input />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
