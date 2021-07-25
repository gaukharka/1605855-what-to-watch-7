import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoadMoreButton from './load-more-button';

const mockStore = configureStore({});

describe('Component: LoadMoreButton',() => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const result = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoadMoreButton
            onClickShowMoreMovies={() => {}}
          />
        </Router>
      </Provider>,
    );

    expect(result.getByText(/Show more/i)).toBeInTheDocument();
  });
});
