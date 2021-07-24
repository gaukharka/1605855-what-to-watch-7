import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen',() => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>,
    );

    expect(getByText('404. Page not found')).toBeInTheDocument();
    expect(getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
