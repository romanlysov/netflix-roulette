import React from 'react'
import { Field } from 'redux-form'
import './style.scss'

export const Input = ({className, placeholder, onChange, value}) => {
    return (
        <Field component='input' name='search' className={className} type="text" placeholder={placeholder} onChange={onChange} value = {value} data-input="main__search"/>
    )
}
