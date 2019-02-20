import { actionCreator } from '../../../actions'

export const filterSwitcher = (event, props) => {
    const titleLabelElement = document.querySelector('.search-by__title-label')
    const genreLabelElement = document.querySelector('.search-by__genre-label')
    switch (event.target.classList[0]) {
        case 'search-by__genre-label' :
            event.target.classList.add('label-chosen')
            titleLabelElement.classList.remove('label-chosen')
            props.dispatch(actionCreator.setSearchByFilter('searchBy=genres'))
            break
        case 'search-by__title-label' :
            event.target.classList.add('label-chosen')
            genreLabelElement.classList.remove('label-chosen')
            props.dispatch(actionCreator.setSearchByFilter('searchBy=title'))
            break
        default: event.preventDefault()
    }
}
