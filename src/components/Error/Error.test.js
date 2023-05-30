import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Error } from './Error';

describe('Error', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
    );

    it('renders Error component', () => {
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });
});
