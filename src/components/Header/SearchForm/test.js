import React from 'react'

import { SearchForm } from 'components/Header/SearchForm/index'
import renderer from 'react-test-renderer'

test('renders Input properly', () => {
    const wrapper = renderer
        .create(<SearchForm/>)
        .toJSON()
    expect(wrapper).toMatchSnapshot()

})