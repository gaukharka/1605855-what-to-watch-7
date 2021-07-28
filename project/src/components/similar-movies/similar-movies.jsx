import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MAX_SIMILAR_MOVIES_SHOWN } from '../../consts';
import MovieCard from '../movie-card/movie-card';
import { getMovie, getMovies, getGenres } from '../../store/movie-data/selectors';
import { getFilteredMovies } from '../../selectors/get-filtered-movies';

function SimilarMovies() {
  const currentMovie = useSelector(getMovie);
  const movies = useSelector(getMovies);
  const genre = useSelector(getGenres);

  const filteredMovies = getFilteredMovies(movies, genre);
  const moviesFilteredBySimilarity = filteredMovies.filter((movie) => movie.id !== currentMovie.id);
  const filteredByGenre = moviesFilteredBySimilarity.filter((movie) => movie.genre === currentMovie.genre );

  const [activeMovie, setActiveMovie] = useState();

  return (
    <section className="catalog catalog--like-this" data-testid="smilar-movies">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {filteredByGenre.slice(0, MAX_SIMILAR_MOVIES_SHOWN).map((item) => (
          <MovieCard
            key={item.id+1}
            movie={item}
            isActive={item === activeMovie}
            onMouseOver={() => setActiveMovie(item)}
            onMouseOut={() => setActiveMovie(null)}
          />
        ))}
      </div>
    </section>
  );
}

export default SimilarMovies;
