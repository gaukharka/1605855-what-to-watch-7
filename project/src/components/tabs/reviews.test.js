import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reviews from './reviews';
import dateFormat from 'dateformat';

const initialState = {
  REVIEW: {
    reviews: [
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
          name: 'Emely',
        },
        rating:5.1,
        comment: 'I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.',
        date: '2021-07-08T16:51:35.253Z',
      },
    ],
  },
};

const reviews = initialState.REVIEW.reviews;
const id = 2;

const mockStore = configureStore([thunk]);

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/comments/2');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Reviews id={id}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${reviews[0].comment}`)).toBeInTheDocument();
    expect(screen.getByText(`${reviews[0].user.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${dateFormat(reviews[0].date, 'yyyy-mm-dd')}`)).toBeInTheDocument();
    expect(screen.getByText(`${reviews[0].rating}`)).toBeInTheDocument();
  });
});
