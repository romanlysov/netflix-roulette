import React from 'react'

import { Header } from '../Header'
import { HeaderClass } from '../../constants'
import { MovieInfoScreenWrapper } from '../MovieInfoScreenWrapper'
import { Footer } from '../Footer'

export const NotFound = () => {
  return (
    <>
      <Header film={{}} className={HeaderClass.movieCard} onclick={() => {}} />
      <MovieInfoScreenWrapper>
        <h1>
          <p>404</p>
        </h1>
        <p>oops, wrong url!</p>
      </MovieInfoScreenWrapper>
      <Footer />
    </>
  )
}
