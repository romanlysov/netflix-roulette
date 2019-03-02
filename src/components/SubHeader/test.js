import React from 'react'
import renderer from 'react-test-renderer'

import { SubHeader } from './index'

test('SubHeader renders correctly', ()=> {
    const wrapper = renderer.create(<SubHeader genre='drama'/>).toJSON()
    expect(wrapper).toMatchSnapshot()
})