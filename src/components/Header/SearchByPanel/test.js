import React from 'react'
import renderer from 'react-test-renderer'

import { SearchByPanel } from 'src/components/Header/SearchByPanel'

test('renders SearchByPanel properly', () => {
  const wrapper = renderer.create(<SearchByPanel />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
