import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

function MovieList(props) {
  const {movies} = props;
  const [activeMovie, setActiveMovie] = useState();

  return (
    <div className="catalog__films-list">
      {movies.map((item) => (
        <MovieCard
          key={item.id}
          id={item.id}
          name={item.name}
          previewImage={item.previewImage}
          previewVideo={item.previewVideo}
          isActive={item === activeMovie}
          onMouseOver={() => setActiveMovie(item)}
          onMouseOut={() => setActiveMovie(null)}
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
    previewVideo: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
