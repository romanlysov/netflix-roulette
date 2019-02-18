import React from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
// import { WrappedMainScreenContainer } from '../../containers/MainScreenContainer/index'
import { AsyncAppContainer } from '../../containers/AsyncApp'
import './style.scss'

export const MainScreen = () => {
    return (
        <div className={'main-screen'}>
            <ErrorBoundary>
                <AsyncAppContainer/>
            </ErrorBoundary>
        </div>
    )
}
