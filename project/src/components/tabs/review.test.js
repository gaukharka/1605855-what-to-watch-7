import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import dateFormat from 'dateformat';
import Review from './review';

const review = {
  id: 1,
  user: {
    id: 15,
    name: 'Kendall',
  },
  rating: 9.2,
  comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I&#39ve ever seen.',
  date: '2021-07-01T16:51:35.253Z',
};

describe('Component: Review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Review
          review={review}
        />
      </Router>,
    );

    expect(getByText(`${review.comment}`)).toBeInTheDocument();
    expect(getByText(`${review.user.name}`)).toBeInTheDocument();
    expect(getByText(`${dateFormat(review.date, 'yyyy-mm-dd')}`)).toBeInTheDocument();
    expect(getByText(`${review.rating}`)).toBeInTheDocument();
  });
});

