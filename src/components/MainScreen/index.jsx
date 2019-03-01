import React from 'react'

import { SearchResultLayout } from 'components/MainScreen/SearchResultLayout'
import { ErrorBoundary } from '../../containers/ErrorBoundary'

export const MainScreen = ({films, onclick} )=> {
    return (
        <div className="main-screen">
            <ErrorBoundary>
                <SearchResultLayout
                    films={films}
                    onclick={onclick}
                />
            </ErrorBoundary>
        </div>
    )
}