import React from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { SubHeader } from './SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from './SearchBySameGenre/MoreMovisByGenre'

export const MovieInfoScreen = ({genre}) => {
    return <>
            <Header className="movie-card"/>
            <SubHeader genre={genre}/>
            <MoreMoviesByGenre genre={genre}/>
            <Footer/>
    </>
}
