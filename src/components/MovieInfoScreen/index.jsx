import React from 'react'

import { Footer } from '../Footer'
import { SubHeader } from './SearchBySameGenre/SubHeader'
import { MoreMoviesByGenreContainer } from '../../containers/MoreMoviesByGenreContainer'
import { FormContainer } from '../../containers/FormContainer';

export const MovieInfoScreen = ({genre}) => {
    return <>
        <header className='header movie-card'>
            <FormContainer/>
        </header>
            <SubHeader genre={genre}/>
            <div className='main-screen'>
                <MoreMoviesByGenreContainer genre={genre}/>
            </div>
            <Footer/>
    </>
}
