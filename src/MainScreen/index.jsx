import React from 'react';
import './style.scss';

export const MainScreen = (props) => {
    return (<div className={"main-screen"}>
                <div className={props.className}>
                <h2 className={"no-results__h2"}>No films found</h2>
            </div>
        </div>
    )
};