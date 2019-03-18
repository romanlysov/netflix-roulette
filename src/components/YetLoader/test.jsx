import React from 'react'
import renderer from 'react-test-renderer'

import { YetLoader } from './index'

test('YetLoader renders correctly', () => {
  const wrapper = renderer
  wrapper.create(<YetLoader/>).toJSON()
  expect(wrapper).toMatchSnapshot()
})