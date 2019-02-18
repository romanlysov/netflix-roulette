import React from 'react'

import { connect } from 'react-redux'
import { setFilmsLoadingStatus } from '../../actions'
import {SearchResultLayout} from '../../components/MainScreen/SearchResult'
// import {SearchResultLayout} from '../../components/MainScreen/SearchResult'

export class AsyncApp extends React.Component {
    state = {
        data: [],
        isLoading: false
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://react-cdp-api.herokuapp.com/movies?searchBy=title')
        xhr.send()
        this.setState({isLoading: true})

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoading: false
                })
            }
        }
        xhr.onloadend = () => {
            this.props.dispatch(setFilmsLoadingStatus(true))
            console.log(this.props.filmsArray)
        }
    }
    renderScreen = () => {
        const {isLoading} = this.state
        if (isLoading) {
            return <p>Загрузка</p>
        } else {
            return <SearchResultLayout status={false} films={this.props.filmsArray.data}/>
        }
    }
    render() {
        return (this.renderScreen())
    }
}
const mapStateToProps = (state) => {
    return {
        filmsLoadingStatus: state.FILMS_ARE_LOADED,
        filmsArray: state.FILMS_ARRAY
    }
}

export const AsyncAppContainer = connect(mapStateToProps)(AsyncApp)
