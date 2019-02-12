import React from 'react';

import { Sorter } from "./Sorter";
import './style.scss';

export const SearchSettings = ({counter}) => {
    return (
        <div className={"search-settings"}>
            <div className={"search-settings__counter"}>
                <span>{counter} movies found</span>
            </div>
            <div className={"search-settings__controls"}>
                <Sorter/>
            </div>
        </div>
    )
};