import React from 'react'
import { SearchButton } from './index'
import { shallow } from 'enzyme'

// проверяем, что пропсы корректно передаются в компонент
test('<SearchButton/>', () => {
    const wrapper = shallow(<SearchButton classAttribute="testing"/>)
    expect(wrapper.find('button').hasClass('testing')).toEqual(true)
})
