import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { PageNavLink } from './PageNavLink';
import store from '../../app/store';

describe('Header', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PageNavLink to="/courses" text="COURSES" />
        </Provider>
      </MemoryRouter>,
    );

    it('renders Header component', () => {
      expect(screen.getByText(/COURSES/)).toBeInTheDocument();
    });
  });
});
