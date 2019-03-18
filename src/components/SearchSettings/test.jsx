import React from 'react'
import renderer from 'react-test-renderer'

import { SearchSettings } from './index'

test('SearchSettings renders correctly', () => {
  const wrapper = renderer
  wrapper.create(<SearchSettings/>).toJSON()
  expect(wrapper).toMatchSnapshot()
})