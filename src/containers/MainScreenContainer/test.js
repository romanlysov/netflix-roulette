import React from 'react'
import { shallow } from 'enzyme'

import { MainScreenUnwrapped } from './index'
import { SearchStatus } from '../../constants'
import { NoResults } from '../../components/MainScreen/NoResults'
import { MainScreen } from '../../components/MainScreen'

describe('MainScreenUnwrapped renders MainScreen depending on props', () => {
  test('MainScreenUnwrapped renders MainScreen', () => {
    const wrapper = shallow(<MainScreenUnwrapped sortBy="vote_average" />)
    wrapper.setProps({
      mainViewsSwitch: SearchStatus.showRequested,
      filmsLoadingStatus: true
    })
    expect(wrapper.containsMatchingElement(<MainScreen />)).toEqual(true)
  })

  test('MainScreenUnwrapped should render NoResults', () => {
    const wrapper = shallow(<MainScreenUnwrapped sortBy="vote_average" />)
    wrapper.setProps({
      mainViewsSwitch: SearchStatus.showRequested,
      filmsLoadingStatus: false
    })
    expect(wrapper.containsMatchingElement(<NoResults />)).toEqual(true)
  })
})
