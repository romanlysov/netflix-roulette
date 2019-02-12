import React from 'react';

import { Switcher } from "./Switcher";
import {SearchResultLayout} from "./SearchResult";
import './style.scss';
import {NoResults} from "./NoResults";




export const MainScreen = () => {
    return (<div className={"main-screen"}>
                    <Switcher/>
        </div>
    )
};