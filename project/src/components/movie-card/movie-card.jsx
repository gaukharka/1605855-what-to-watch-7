import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const {movies} = props;

  return (
    <div className="catalog__films-list">
      {movies.map((item, idx) => (
        <article key={item.idx} className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src={item.previewImage} alt={item.name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{item.name}</a>
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
  })).isRequired,
};

export default MovieCard;
