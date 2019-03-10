import React from 'react'

import { Header } from '../Header'
import { HeaderClass, SearchButtonClass } from '../../constants'
import { MovieInfoScreenWrapper } from '../MovieInfoScreenWrapper'
import { Footer } from '../Footer'
import './style.scss'

export const NotFound = () => {
  return (
    <>
      <Header film={{}} className={HeaderClass.movieCard} onclick={() => {}} searchButtonClass={SearchButtonClass.default} />
      <MovieInfoScreenWrapper>
        <h1 className='not-found__header'>
          404
        </h1>
        <p className='not-found__text'>oops, wrong url!</p>
      </MovieInfoScreenWrapper>
      <Footer />
    </>
  )
}
