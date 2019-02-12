import React from 'react';

export const Input = ({className, placeholder}) => {
    return (
        <input className={className} type="text" placeholder={placeholder}/>
    )
};