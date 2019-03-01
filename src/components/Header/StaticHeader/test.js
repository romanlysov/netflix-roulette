import React from 'react'
import renderer from 'react-test-renderer'

import { StaticHeader } from 'src/components/Header/StaticHeader'

test('renders StaticHeader properly', () => {
  const wrapper = renderer.create(<StaticHeader />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
