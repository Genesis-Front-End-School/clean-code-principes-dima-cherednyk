import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { PageNavLink } from './PageNavLink';

describe('Header', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <PageNavLink to="/courses" text="COURSES" />
      </MemoryRouter>,
    );

    it('renders Header component', () => {
      expect(screen.getByText(/COURSES/)).toBeInTheDocument();
    });
  });
});
