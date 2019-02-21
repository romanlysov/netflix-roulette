import React from 'react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { SubHeader } from 'components/MovieInfoScreen/SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from 'components/MovieInfoScreen/SearchBySameGenre/MoreMoviesByGenre'

export const MovieInfoScreen = ({genre}) => {
    return <>
            <Header className="movie-card"/>
            <SubHeader genre={genre}/>
            <div className='main-screen'>
                <MoreMoviesByGenre genre={genre}/>
            </div>
            <Footer/>
    </>
}
