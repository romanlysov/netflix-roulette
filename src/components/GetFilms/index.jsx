import axios from 'axios'
import { actionCreator, showRequested } from '../../actions'

export const getFilms = (props, url) => {
    axios.get(url).then((response) => {
        props.dispatch(actionCreator.setFilmsLoadingStatus(true))
        props.dispatch(actionCreator.getFilmsData(response.data.data))
        props.dispatch(actionCreator.setMainView(showRequested))
        props.dispatch(actionCreator.updateMoviesFoundQuantity(response.data.data.length))
    })
}

