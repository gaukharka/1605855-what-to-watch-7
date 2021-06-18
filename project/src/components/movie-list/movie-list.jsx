import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

function MovieList(props) {
  const {movies} = props;
  const [, setActiveMovie]=useState(null);

  return (
    <div className="catalog__films-list">
      {movies.map((item) => (
        <MovieCard
          key={item.id}
          name={item.name}
          previewImage={item.previewImage}
          id={item.id}
          videoLink={item.videoLink}
          onMouseOver={() => setActiveMovie(item)}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
