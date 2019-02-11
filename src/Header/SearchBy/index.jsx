import React from 'react';

export const SearchBy = (props) => {
    return (
        <div className={props.className}>
        <span>Search by</span>
            <input type={"radio"} name={"search-by"} value={"title"} id={"title"} checked={true}/>
            <label className={""} htmlFor={"title"}>Title</label>
            <input type={"radio"} name={"search-by"} value={"genre"} id={"genre"}/>
            <label htmlFor={"genre"}>Genre</label>
        </div>
    )
};