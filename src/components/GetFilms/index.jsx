import axios from 'axios'
import { actionCreator } from '../../actions'
import { SearchStatus } from '../../constants'

export const getFilms = (props, url) => {
    axios.get(url).then((response) => {
        props.dispatch(actionCreator.setFilmsLoadingStatus(true))
        props.dispatch(actionCreator.getFilmsData(response.data.data))
        props.dispatch(actionCreator.setMainView(SearchStatus.showRequested))
        props.dispatch(actionCreator.updateMoviesFoundQuantity(response.data.data.length))
    })
}

