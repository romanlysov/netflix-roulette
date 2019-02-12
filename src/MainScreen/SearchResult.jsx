import React from 'react';
import PropTypes from 'prop-types';

export const SearchResultLayout = ({films}) => {
    const filmsList = films.map((film) =>
        <div className={"film-layout__item"}>
            <img className={"film-layout__cover"} src={film.cover} alt={""}/>
            <div className={"film-layout__title-container"}>
            <span className={"film-layout__title"}>{film.title}</span>
            <span className={"film-layout__year"}>{film.release_date}</span>
            </div>
            <span className={"film-layout__genre"}>{film.genre}</span>
        </div>


    );
    return ( <ul className={"film-layout"}>{filmsList}</ul>);
};
SearchResultLayout.propTypes = {
    films: PropTypes.array
};



