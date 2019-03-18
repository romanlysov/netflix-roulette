import React from 'react'
import { shallow } from 'enzyme'

import { MoreMoviesByGenreUnwrapped } from './index'
import { SearchResultLayout } from '../../components/MainScreen/SearchResultLayout'
import { YetLoader} from '../../components/YetLoader'


describe('MoreMoviesByGenreUnwrapped renders SearchResultLayout or Loaderf', () => {
  test('MoreMoviesByGenreUnwrapped renders SearchResultLayout', () => {
    const wrapper = shallow(<MoreMoviesByGenreUnwrapped/>)
    wrapper.setProps({ filmsAreLoaded: true })
    expect(wrapper.containsMatchingElement(<SearchResultLayout />)).toEqual(true)
  })

  test('MoreMoviesByGenreUnwrapped renders Loader', () => {
    const wrapper = shallow(<MoreMoviesByGenreUnwrapped />)
    wrapper.setProps({ filmsAreLoaded: false  })
    expect(wrapper.containsMatchingElement(<YetLoader />)).toEqual(true)
  })
})