import React from 'react'

import './style.scss'

export const SearchByPanel = ({className, searchBy}) => {
    return (
        <div className={className} onClick={searchBy}>
        <span className={`${className}__header`}>Search by</span>
            <input className={`${className}__title-input`} type={'radio'} name={'search-by'} value={'title'} id={'title'} defaultChecked={true}/>
            <label className={`${className}__title-label label-chosen`} htmlFor={'title'}>Title</label>
            <input className={`${className}__genre-input`} type={'radio'} name={'search-by'} value={'genre'} id={'genre'}/>
            <label className={`${className}__genre-label`} htmlFor={'genre'}>Genre</label>
        </div>
    )
}
