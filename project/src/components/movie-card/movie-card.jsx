import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function MovieCard(props) {
  const {id, previewImage, name, onMouseOver} = props;

  return(
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver}>
      <div className="small-film-card__image">
        <Link to={`/films/${id}`}>
          <img
            src={previewImage}
            alt={name} width="280"
            height="175"
          />
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${id}`}
          className="small-film-card__link"
        >{name}
        </Link>
      </h3>
    </article>);
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default MovieCard;
