import { FormClass, HeaderClass, SearchButtonClass, SearchStatus } from '../../constants'

export const screenSelector = state => ({
    mainScreen: state.main.get('ScreenType')
})

export const routingSelector = state => ({
    SkipRouting: state.routing.get('SkipRouting')
})

export const sortBySelector = state => ({
    sortBy: state.main.get('SearchRequest').get('SortBy')
})

export const formClassSelector = state => ({
    formClass:
        state.main.get('ScreenType') === SearchStatus.showMovieInfo ||
        state.main.ScreenType === SearchStatus.notFound
            ? FormClass.hidden
            : FormClass.default
})

export const headerClassSelector = state => ({
    className:
        state.main.get('ScreenType') === SearchStatus.showMovieInfo
            ? HeaderClass.movieCard
            : HeaderClass.searchResult
})

export const searchButtonSelector = state => ({
    searchButtonClass:
        state.main.get('ScreenType') === SearchStatus.showMovieInfo
            ? SearchButtonClass.default
            : SearchButtonClass.hidden
})

export const movieInfoFlagSelector = state => ({
    isMovieInfo: state.main.get('ScreenType') === SearchStatus.showMovieInfo
})
