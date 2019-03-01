import React from 'react'
import renderer from 'react-test-renderer'

import {MainLogo} from 'components/MainLogo/index'

test('renders MainLogo properly', () => {
    const wrapper = renderer
        .create(<MainLogo/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()
})