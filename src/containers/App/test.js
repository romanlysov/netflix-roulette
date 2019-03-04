import React from 'react'
import { shallow } from 'enzyme'

import { App } from './index'
import { HeaderContainer } from '../HeaderContainer'
import { BodyContainer } from '../BodyContainer'
import { Footer } from '../../components/Footer'

describe('App renders correctly', () => {
  test('App renders header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<HeaderContainer />)).toEqual(true)
  })

  test('App renders main container', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<BodyContainer />)).toEqual(true)
  })

  test('App renders footer', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true)
  })
})