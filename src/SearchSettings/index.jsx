import React from 'react';
import './style.scss';
import { Sorter } from "./Sorter";

export const SearchSettings = (props) => {
    return (
        <div className={"search-settings"}>
            <div className={"search-settings__counter"}>
                <span>{props.counter} movies found</span>
            </div>
            <div className={"search-settings__controls"}>
                <Sorter/>
            </div>
        </div>
    )
};