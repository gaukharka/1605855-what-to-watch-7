import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Rating from './rating';

const rating = 1;

describe('Component: Rating', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Rating
          rating={rating}
          onChange={() => {}}

        />
      </Router>,
    );

    expect(getByText(`Rating ${rating+1}`)).toBeInTheDocument();
  });
});
