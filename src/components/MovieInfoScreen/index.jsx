import React from 'react'

<<<<<<< HEAD
import { Header } from '../Header'
import { Footer } from '../Footer'
import { SubHeader } from './SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from './SearchBySameGenre/MoreMovisByGenre'
=======
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { SubHeader } from 'components/MovieInfoScreen/SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from 'components/MovieInfoScreen/SearchBySameGenre/MoreMoviesByGenre'
>>>>>>> 6c3a8cc94e523dd87750ed8c2e37533009112c02

export const MovieInfoScreen = ({genre}) => {
    return <>
            <Header className="movie-card"/>
            <SubHeader genre={genre}/>
<<<<<<< HEAD
            <MoreMoviesByGenre genre={genre}/>
=======
            <div className='main-screen'>
                <MoreMoviesByGenre genre={genre}/>
            </div>
>>>>>>> 6c3a8cc94e523dd87750ed8c2e37533009112c02
            <Footer/>
    </>
}
