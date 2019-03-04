import React from 'react'
import './style.scss'

export const Input = ({className, placeholder, onChange, value}) => {
    return (
        <input className={className} type="text" placeholder={placeholder} onChange={onChange} value = {value}/>
    )
}
