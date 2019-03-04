import React from 'react'
import renderer from 'react-test-renderer'

import { MovieInfoScreenWrapper } from './index'

test('MovieInfoScreenWrapper renders correctly', () => {
  const wrapper = renderer
  wrapper.create(<MovieInfoScreenWrapper/>).toJSON()
  expect(wrapper).toMatchSnapshot()
})