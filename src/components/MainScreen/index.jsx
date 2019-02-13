import React from 'react'

import {Switcher} from 'components/MainScreen/Switcher'
import {ErrorBoundary} from 'components/ErrorBoundary'
import './style.scss'

export const MainScreen = () => {
    return (
        <div className={'main-screen'}>
            <ErrorBoundary>
            <Switcher/>
            </ErrorBoundary>
        </div>
    )
}
