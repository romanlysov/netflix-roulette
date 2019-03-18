import React from 'react'
import renderer from 'react-test-renderer'

import { MovieCard } from 'components/MovieCard/index'

const filmMock = {
    poster_path: '',
    title: '',
    genre: ''
}

test('MovieCard renders properly', ()=> {
    const wrapper = renderer
    wrapper.create(<MovieCard film={filmMock}/>).toJSON()
    expect(wrapper).toMatchSnapshot()
})