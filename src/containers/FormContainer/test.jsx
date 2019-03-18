import React from 'react'
import { shallow } from 'enzyme'

import { FormContainerUnwrapped } from './index'
import { SearchForm } from '../../components/SearchForm'

test('FormContainer should render SearchForm', () => {
  const wrapper = shallow(<FormContainerUnwrapped />)
  expect(wrapper.containsMatchingElement(<SearchForm />)).toEqual(true)
})