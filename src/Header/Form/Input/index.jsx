import React from 'react';

export const Input = (props) => {
    return (
        <input className={props.className} type="text" placeholder={props.placeholder}/>
    )
}