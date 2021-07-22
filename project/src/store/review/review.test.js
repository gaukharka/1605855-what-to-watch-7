import { reviewData } from './review';
import { ActionType } from '../action';

const reviews = [
  {
    id: 1,
    user: {
      id: 15,
      name: 'Kendall',
    },
    rating: 9.2,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I&#39ve ever seen.',
    date: '2021-07-01T16:51:35.253Z',
  },
  {
    id:2,
    user:{
      id:17,
      name: 'Emely'
    },
    rating:5.1,
    comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
    date: '2021-07-08T16:51:35.253Z'
  },
  {
    id:3,
    user: {
      id: 14,
      name: 'Corey'
    },
    rating:1.2,
    comment: 'Unfortunately we don&#39t have a reliable way to tell the true ratings of a movie.',
    date: '2021-06-22T16:51:35.253Z',
  },
];

describe('Reducer: reviewData', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewData(undefined, {}))
      .toEqual({reviews: []});
  });

  it('should load reviews', () => {
    const state = {reviews: []};
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(reviewData(state, loadReviewsAction)).toEqual({reviews: reviews});
  });
});
