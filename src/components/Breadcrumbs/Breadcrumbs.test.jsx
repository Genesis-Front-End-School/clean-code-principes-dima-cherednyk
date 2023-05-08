import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  describe('should render Breadcrumbs', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Breadcrumbs />
        </Provider>
      </MemoryRouter>,
    );

    it('verify Breadcrumbs elements in page', () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.getByAltText('home')).toBeInTheDocument();
      expect(screen.getByAltText('arrowLeft')).toBeInTheDocument();
      expect(screen.getByTitle('activeCourseTitle')).toBeInTheDocument();
    });
  });
});
