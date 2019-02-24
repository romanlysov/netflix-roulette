import React from 'react'

import { Footer } from 'components/Footer'
import { SubHeader } from 'components/MovieInfoScreen/SearchBySameGenre/SubHeader'
import { MoreMoviesByGenre } from 'components/MovieInfoScreen/SearchBySameGenre/MoreMoviesByGenre'
import { FormContainer } from '../../containers/FormContainer';

export const MovieInfoScreen = ({genre}) => {
    return <>
        <header className='header movie-card'>
            <FormContainer/>
        </header>
            <SubHeader genre={genre}/>
            <div className='main-screen'>
                <MoreMoviesByGenre genre={genre}/>
            </div>
            <Footer/>
    </>
}
