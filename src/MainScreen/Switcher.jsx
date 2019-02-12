import React from 'react';

import { SearchResultLayout } from "./SearchResult";
import { NoResults } from "./NoResults";
import {filmsArray} from "./data";

const ButtonSwitcher = (props) => {
    const isResultShown = props.isResultShown;
    if (isResultShown) {
        return <SearchResultLayout films={filmsArray}/>
    }
    return <NoResults/>
};

const NoFilmsButton = (props) => {
    return <button onClick={props.onClick}>
        remove results
    </button>
};
const ShowFilmsButton = (props) => {
    return <button onClick={props.onClick}>
        show results
    </button>
};

export class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.handleNoFilmsClick = this.handleNoFilmsClick.bind(this);
        this.handleShowFilmsClick = this.handleShowFilmsClick.bind(this);
        this.state = {isResultShown: true};
    }
    handleNoFilmsClick() {
        this.setState({isResultShown: false});
    }
    handleShowFilmsClick() {
        this.setState({isResultShown: true});
    }
    render() {
        const isResultShown = this.state.isResultShown;

        let button = null;
        if (isResultShown) {
            button =  <NoFilmsButton onClick={this.handleNoFilmsClick}/>;
        } else {
            button = <ShowFilmsButton onClick={this.handleShowFilmsClick}/>;
        }
        return (
            <div className={"main-screen__content"}>
                {button}
                <ButtonSwitcher isResultShown={isResultShown}/>

            </div>
        )
    }
}
