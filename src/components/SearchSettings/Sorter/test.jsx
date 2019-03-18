import React from 'react'
import renderer from 'react-test-renderer'

import { Sorter } from './index'

test('Sorter renders correctly', () => {
  const wrapper = renderer
  wrapper.create(<Sorter/>).toJSON()
  expect(wrapper).toMatchSnapshot()
})