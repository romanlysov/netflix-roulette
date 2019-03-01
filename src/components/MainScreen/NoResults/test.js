import React from 'react'
import renderer from 'react-test-renderer'

import { NoResults } from 'components/MainScreen/NoResults/index'

test('NoResult renders properly', () => {
  const wrapper = renderer.create(<NoResults />).toJSON()
  expect(wrapper).toMatchSnapshot()
})
