import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function MovieCard(props) {
  // const [activeMovieCard, setActiveMovieCard]=useState();
  const {movies}=props;


  return (
    <div className="catalog__films-list">
      {movies.map((item) => (
        <article key={item.id} className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <Link to="/films/:id">
              <img
                src={item.previewImage}
                alt={item.name} width="280"
                height="175"
                onMouseOver={() => {
                  // setActiveMovieCard(item.previewVideoLink);
                }}
              />
            </Link>
          </div>
          <h3 className="small-film-card__title">
            <Link to="/films/:id" className="small-film-card__link">{item.name}</Link>
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
