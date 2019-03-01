import React from 'react'
import renderer from 'react-test-renderer'

import { SearchByPanel } from 'components/Header/SearchByPanel/index'

test('renders SearchByPanel properly', () => {
  const wrapper = renderer.create(<SearchByPanel />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
