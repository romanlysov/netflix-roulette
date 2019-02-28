import React from 'react'

import { Input } from 'components/Header/SearchForm/Input/index'
import renderer from 'react-test-renderer'

test('renders Input properly', () => {
    const wrapper = renderer
        .create(<Input/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()

})