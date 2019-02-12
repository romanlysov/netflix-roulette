import React from 'react';

export const SearchBy = ({className}) => {
    return (
        <div className={className}>
        <span>Search by</span>
            <input type={"radio"} name={"search-by"} value={"title"} id={"title"} defaultChecked={true}/>
            <label className={""} htmlFor={"title"}>Title</label>
            <input type={"radio"} name={"search-by"} value={"genre"} id={"genre"}/>
            <label htmlFor={"genre"}>Genre</label>
        </div>
    )
};