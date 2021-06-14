import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function MovieCard(props) {
  const {movies}=props;
  movies.shift();

  const [, setActiveMovie]=useState();


  return (
    <div className="catalog__films-list">
      {movies.map((item) => (
        <article
          key={item.id}
          className="small-film-card catalog__films-card"
          onMouseOver={(target) => setActiveMovie(target.id)}
        >
          <div className="small-film-card__image">
            <Link to={`/films/${item.id}`}>
              <img
                src={item.previewImage}
                alt={item.name} width="280"
                height="175"
              />
            </Link>
          </div>
          <h3 className="small-film-card__title">
            <Link
              to={`/films/${item.id}`}
              className="small-film-card__link"
            >
              {item.name}
            </Link>
          </h3>
        </article>))}
    </div>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.node.isRequired,
  })).isRequired,
};

export default MovieCard;
