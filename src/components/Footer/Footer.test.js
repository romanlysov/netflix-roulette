import React from 'react'

import { Footer } from 'components/Footer/index'
import renderer from 'react-test-renderer'

test('renders footer properly', () => {
    const wrapper = renderer
        .create(<Footer/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()
})
