import React from 'react'

import './style.scss'

export const Sorter = () => {
    return <>
        <span className={'search-settings__sort-by'}>Sort by</span>
        <button className={'search-settings__release-button'}> release date
        </button>
        <button className={'search-settings__rating-button active'}>rating
        </button>
        </>
}
