import React from 'react'

import { Sorter } from 'components/SearchSettings/Sorter'

export const SearchSettings = ({counter}) => {
    return (
        <div className='search-settings'>
            <div className='search-settings__counter'>
                <span className='search-settings__info'>{counter} movies found</span>
            </div>
            <div className='search-settings__controls'>
                <Sorter/>
            </div>
        </div>
    )
}
