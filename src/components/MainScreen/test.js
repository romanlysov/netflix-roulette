import React from 'react'
import renderer from 'react-test-renderer'

import { MainScreen } from './index'

test('MainScreen renders correctly', ()=> {
    const wrapper = renderer
    renderer.create(<MainScreen/>).toJSON()
    expect(wrapper).toMatchSnapshot()
} )