import React from 'react'
import renderer from 'react-test-renderer'

import { Footer } from 'components/Footer/index'

test('renders footer properly', () => {
    const wrapper = renderer
        .create(<Footer/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()
})
