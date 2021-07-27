import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../consts';
import UserBlock from './user-block';

const mockStore = configureStore({});

describe('Component: UserBlock', () => {
  it('should render correctly for authorized user', () => {
    const history = createMemoryHistory();

    const initialState = {
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo: {
          'id': 14,
          'name': 'Corey',
          'avatar_url': 'img/avatar.jpg',
          'token': 'YXNkYUBnbWFpbC5jb20=',
        },
      },
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });


  it('should render correctly for not authorized user', () => {
    const history = createMemoryHistory();

    const initialState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
