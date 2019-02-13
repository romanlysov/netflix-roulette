import React from 'react'

export const SearchResultLayoutItem = ({item}) => {
    return (<div className={'film-layout__item'}>
        <img className={'film-layout__cover'} src={item.cover} alt={''}/>
        <div className={'film-layout__title-container'}>
            <span className={'film-layout__title'}>{item.title}</span>
            <span className={'film-layout__year'}>{item.release_date}</span>
        </div>
        <span className={'film-layout__genre'}>{item.genre}</span>
    </div>)
}
