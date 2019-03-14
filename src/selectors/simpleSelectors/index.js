import { FormClass, HeaderClass, SearchButtonClass, SearchStatus } from '../../constants'

export const screenSelector = state => ({
    mainScreen: state.get('ScreenType')
})

export const routingSelector = state => ({
    SkipRouting: state.get('SkipRouting')
})

export const sortBySelector = state => ({
    sortBy: state.get('SearchRequest').get('SortBy')
})

export const formClassSelector = state => ({
    formClass:
        state.get('ScreenType') === SearchStatus.showMovieInfo ||
        state.ScreenType === SearchStatus.notFound
            ? FormClass.hidden
            : FormClass.default
})

export const headerClassSelector = state => ({
    className:
        state.get('ScreenType') === SearchStatus.showMovieInfo
            ? HeaderClass.movieCard
            : HeaderClass.searchResult
})

export const searchButtonSelector = state => ({
    searchButtonClass:
        state.get('ScreenType') === SearchStatus.showMovieInfo
            ? SearchButtonClass.default
            : SearchButtonClass.hidden
})

export const movieInfoFlagSelector = state => ({
    isMovieInfo: state.get('ScreenType') === SearchStatus.showMovieInfo
})
