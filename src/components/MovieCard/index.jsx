import React from 'react'

import './style.scss'

export const MovieCard = ({film}) => {
    return <div className={'header__movie-info info-block'}>
        <img src={film.cover} alt={''} className={'info-block__cover'}/>
        <div className={'info-block__description'}>
            <h1 className={'info-block__title'}>{film.title}</h1>
            <span className={'info-block__genre'}>{film.genre}</span>
            <div className={'info-block__sub-info'}>
                <span className={'info-block__year'}>{film.release_date}</span>
                <span className={'info-block__length'}>{film.length}</span>
            </div>
            <p className={'info-block__annotation'}>{film.description}</p>
        </div>
    </div>
}
