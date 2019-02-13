import React from 'react'

import { Switcher } from './Switcher/index'
import { ErrorBoundary } from '../ErrorBoundary'
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
