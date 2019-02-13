import React from 'react'
import './style.scss'

export const Input = ({className, placeholder}) => {
    return (
        <input className={className} type="text" placeholder={placeholder}/>
    )
}
