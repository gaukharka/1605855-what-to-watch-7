import React from 'react';
import Detail from './detail';
import { moviePropTypes } from '../../prop-types/movie-prop-types';

function Details(props) {
  const {movie} = props;

  const title = {
    director: 'Director',
    starring: 'Starring',
    runtime: 'Run Time',
    genre: 'Genre',
    released: 'Released',
  };

  const movieStars = () => {
    if(movie.starring.length > 1) {
      return movie.starring.reduce((prev, curr) => [prev, ', ', curr]);
    }
    return movie.starring;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <Detail data={movie.director} title={title.director}/>
        <Detail data={movieStars()} title={title.starring}/>
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
  movie: moviePropTypes,
};

export default Details;
