import React from 'react';
import PropTypes from 'prop-types';
import Detail from './detail.jsx';

function Details(props) {
  const {movie} = props;

  const title = {
    director: 'Director',
    starring: 'Starring',
    runtime: 'Run Time',
    genre: 'Genre',
    released: 'Released',
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <Detail data={movie.director} title={title.director}/>
        <Detail data={movie.starring.reduce((prev, curr) => [prev, ', ', curr])} title={title.starring}/>
      </div>
      <div className="film-card__text-col">
        <Detail data={movie.runTime} title={title.runtime}/>
        <Detail data={movie.genre} title={title.genre}/>
        <Detail data={movie.released} title={title.released}/>
      </div>
    </div>
  );
}

Details.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Details;
