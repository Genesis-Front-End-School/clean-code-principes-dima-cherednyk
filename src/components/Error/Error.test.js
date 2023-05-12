import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Error } from './Error';
import store from '../../app/store';

describe('Error', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Error />
        </Provider>
      </MemoryRouter>,
    );

    it('renders Error component', () => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });
});
