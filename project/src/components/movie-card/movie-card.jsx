import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPreview from '../player/video-preview.jsx';

function MovieCard(props) {
  const {id, name, previewImage, previewVideo, onMouseOver, onMouseOut,  isActive} = props;

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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default MovieCard;
