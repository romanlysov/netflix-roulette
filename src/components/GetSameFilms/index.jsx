import axios from 'axios'
import { actionCreator } from '../../actions'

export const getSameFilms = (props, url) => {
    axios.get(url).then((response) => {
        props.dispatch(actionCreator.getSameGenreFilms(response.data.data))
    })
}
