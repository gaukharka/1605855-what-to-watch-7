import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Footer from './footer';

const mockStore = configureStore({});

describe('Component: Footer', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Footer isFooter/>
        </Router>
      </Provider>);

    expect(screen.getAllByText('W').length).toBe((2));
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
