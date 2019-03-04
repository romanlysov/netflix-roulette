import React from 'react'
import { shallow } from 'enzyme'

import { HeaderUnwrapped } from './index'
import { SearchStatus } from '../../constants'
import { SubHeader } from '../../components/SubHeader'

describe('HeaderUnwrapped renders Header depending on props', () => {
  test('HeaderUnwrapped renders Header for movie info', () => {
    const wrapper = shallow(<HeaderUnwrapped />)
    wrapper.setProps({ mainViewsSwitch: SearchStatus.showMovieInfo })
    expect(wrapper.containsMatchingElement(<SubHeader />)).toEqual(true)
  })

  test('HeaderUnwrapped renders Header for search request', () => {
    const wrapper = shallow(<HeaderUnwrapped />)
    wrapper.setProps({ mainViewsSwitch: SearchStatus.showRequested })
    expect(wrapper.containsMatchingElement(<SubHeader />)).toEqual(false)
  })
})