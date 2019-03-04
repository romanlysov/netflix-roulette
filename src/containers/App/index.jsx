import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { BodyContainer } from '../BodyContainer'


import '../../components/Header/style.scss'

export const App = ({children})=>  {
      return (
        <>
          <HeaderContainer/>
          <Link to="/test">Test</Link>
            {children}
          <BodyContainer/>
          <Footer />
        </>
      )
}

