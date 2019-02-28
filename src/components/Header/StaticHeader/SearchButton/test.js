import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { SearchForm } from 'components/Header/SearchForm'
import { SearchButton } from './index'

describe('SearchButton', ()=> {
    test('SearchButton work correct with received props', () => {
        const wrapper = shallow(<SearchButton classAttribute="testing"/>)
        expect(wrapper.find('button').hasClass('testing')).toEqual(true)
    })
    test('renders SearchButton properly', ()=> {
        const wrapper = renderer
            .create(<SearchForm/>)
            .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
})

