import React from 'react'

import { SearchResultLayout } from 'components/MainScreen/SearchResult'
import { NoResults } from 'components/MainScreen/NoResults'
import { filmsArray } from '../../../../assets/data'

const ButtonSwitcher = (props) => {
    const { isResultShown } = props
    if (isResultShown) {
        return <SearchResultLayout films={filmsArray}/>
    }
    return <NoResults/>
}

const NoFilmsButton = (props) => {
    const { onClick } = props
    return <button onClick={onClick}>
        remove results
    </button>
}
const ShowFilmsButton = (props) => {
    const { onClick } = props
    return <button onClick={onClick}>
        show results
    </button>
}

export class Switcher extends React.Component {
    constructor(props) {
        super(props)
        this.handleNoFilmsClick = this.handleNoFilmsClick.bind(this)
        this.handleShowFilmsClick = this.handleShowFilmsClick.bind(this)
        this.state = {isResultShown: true}
    }
    handleNoFilmsClick() {
        this.setState({isResultShown: false})
    }
    handleShowFilmsClick() {
        this.setState({isResultShown: true})
    }
    render() {
        const { isResultShown } = this.state

        let button = null
        if (isResultShown) {
            button =  <NoFilmsButton onClick={this.handleNoFilmsClick}/>
        } else {
            button = <ShowFilmsButton onClick={this.handleShowFilmsClick}/>
        }
        return (
            <div className='main-screen__content'>
                {button}
                <ButtonSwitcher isResultShown={isResultShown}/>

            </div>
        )
    }
}
