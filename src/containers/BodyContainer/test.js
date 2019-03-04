import React from 'react'
import { shallow } from 'enzyme'

import { BodyContainerUnwrapped } from './index'
import { SearchStatus } from '../../constants'
import { SearchSettings } from '../../components/SearchSettings'

describe('BodyContainerUnwrapped renders properly depending on prop mainScreen', () => {
  test('BodyContainerUnwrapped should render MovieInfoScreenWrapper', () => {
    const wrapper = shallow(<BodyContainerUnwrapped />)
    wrapper.setProps({ mainScreen: SearchStatus.showMovieInfo })
    expect(wrapper.name()).toEqual('MovieInfoScreenWrapper')
  })

  test('BodyContainerUnwrapped should render SearchSettings', () => {
    const wrapper = shallow(<BodyContainerUnwrapped />)
    wrapper.setProps({ mainScreen: SearchStatus.showRequested })
    expect(wrapper.containsMatchingElement(<SearchSettings />)).toEqual(true)
  })
})
