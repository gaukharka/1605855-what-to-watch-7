export const adaptDataToMovie = (data) => ({
  id: data.id,
  name: data.name,
  posterImage: data.poster_image,
  previewImage: data.preview_image,
  backgroundImage: data.background_image,
  backgroundColor: data.background_color,
  videoLink: data.video_link,
  previewVideo: data.preview_video_link,
  description: data.description,
  rating: data.rating,
  scoresCount: data.scores_count,
  director: data.director,
  starring: data.starring,
  runTime: data.run_time,
  genre: data.genre,
  released: data.released,
  isFavorite: data.is_favorite,
});

export const adaptDataToMovies = (data) => (data.map((movie) => adaptDataToMovie(data)));
