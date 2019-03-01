import React from 'react'
import renderer from 'react-test-renderer'

import { Input } from 'src/components/Header/SearchForm/Input'

test('renders Input properly', () => {
  const wrapper = renderer.create(<Input />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
