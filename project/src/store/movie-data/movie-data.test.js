import { movieData } from './movie-data';
import { ActionType } from '../action';
import { INITIAL_GENRE } from '../../consts';

const initialState = {
  genre: INITIAL_GENRE,
  movies: [],
  promoMovie: {},
  movie: {},
  favoriteMovies: [],
  isFetching: false,
  error: '',
};

const movies = [
  {
    id: 1,
    name: 'Orlando',
    posterImage: 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
    previewImage: 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
    backgroundImage: 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
    backgroundColor: '#D8D3BD',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    rating: 2.6,
    scoresCount: 12292,
    director: 'Sally Potter',
    starring: ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
    runTime: 94,
    genre: 'Action',
    released: 1992,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Seven Years in Tibet',
    posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
    previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
    backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
    backgroundColor: '#C6CADF',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
    rating:  3.6,
    scoresCount: 112612,
    director: 'Jean-Jacques Annaud',
    starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
    runTime: 136,
    genre: 'Adventure',
    released: 1997,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Bronson',
    posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
    previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
    backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
    backgroundColor: '#73B39A',
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
    rating:  3.6,
    scoresCount: 109661,
    director: 'Nicolas Winding Refn',
    starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
    runTime: 92,
    genre: 'Action',
    released: 2008,
    isFavorite: false,
  },
];

describe('Reducer: movieData', () => {
  it('without additional parameters should return initial state', () => {
    expect(movieData(undefined, {}))
      .toEqual(initialState);
  });

  it('should load movies', () => {
    const state = initialState;
    const loadMoviesAction = {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };

    expect(movieData(state, loadMoviesAction)).toEqual({...state, movies});
  });

  it('should load promo movie', () => {
    const state = initialState;
    const loadPromoMovieAction = {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movies[0],
    };

    expect(movieData(state, loadPromoMovieAction)).toEqual({...state, promoMovie: movies[0]});
  });

  it('should load favorite movies', () => {
    const state = initialState;
    const loadFavoriteMoviesAction = {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: movies,
    };

    expect(movieData(state, loadFavoriteMoviesAction)).toEqual({...state, favoriteMovies: movies});
  });

  it('should change genre', () => {
    const state = initialState;
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Action',
    };

    expect(movieData(state, changeGenreAction)).toEqual({...state, genre: 'Action'});
  });

  it('should reset rendered movies', () => {
    const state = initialState;
    const resetAction = {
      type: ActionType.RESET,
    };

    expect(movieData(state, resetAction)).toEqual({...state});
  });

  it('should update movie&#39s isFavorite status', () => {
    const state = initialState;
    const updateMoviesAction = {
      type: ActionType.UPDATE_MOVIE,
      payload: movies[0].isFavorite, movie: movies[2].isFavorite,
    };

    expect(movieData(state, updateMoviesAction)).toEqual({...state, promoMovie: movies[0].isFavorite, movie: movies[0].isFavorite});
  });

  it('should reset genre to initial value', () => {
    const state = initialState;
    const resetGenreToInitialAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(movieData(state, resetGenreToInitialAction))
      .toEqual({
        ...state,
        genre: INITIAL_GENRE,
      });
  });
});
