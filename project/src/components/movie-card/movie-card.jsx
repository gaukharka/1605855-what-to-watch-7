import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoPreview from '../player/video-preview.jsx';
import { moviePropTypes } from '../../prop-types/movie-prop-types';

function MovieCard(props) {
  const {movie, onMouseOver, onMouseOut, isActive } = props;
  const {id, name, previewImage, previewVideo } = movie;

  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {isActive ?
        <VideoPreview
          previewImage={previewImage}
          previewVideo={previewVideo}
          isActive={isActive}
        /> :
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />}
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
  isActive: PropTypes.bool.isRequired,
  movie: moviePropTypes,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default MovieCard;
