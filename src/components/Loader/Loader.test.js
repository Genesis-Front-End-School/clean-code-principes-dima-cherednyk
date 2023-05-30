import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Loader } from './Loader';

describe('Loader', () => {
  describe('should render Breadcrumbs', () => {
    render(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>,
    );

    it('verify loader elements in page', () => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });
});
