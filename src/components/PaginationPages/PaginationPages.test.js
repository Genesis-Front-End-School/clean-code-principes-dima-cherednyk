import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { PaginationPages } from './PaginationPages';

describe('PaginationPages', () => {
  describe('should render component', () => {
    it('renders PaginationPages component', () => {
      render(
        <MemoryRouter>
          <PaginationPages pages={[1, 2, 3]} />
        </MemoryRouter>,
      );

      expect(screen.getByText(/3/)).toBeInTheDocument();
    });
  });

  describe('should navigate to expected page', () => {
    it('should navigate second page', async () => {
      render(
        <MemoryRouter initialEntries={['/courses']}>
          <Provider store={store}>
            <PaginationPages pages={[1, 2, 3]} />
          </Provider>
        </MemoryRouter>,
      );

      await userEvent.click(screen.getByText(/2/));
      expect(screen.getByText(/2/)).toHaveClass('paginationPages__page--isActive');
    });
  });

  describe('should use dots for more than 5 pages', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/courses?page=1']}>
          <Provider store={store}>
            <PaginationPages pages={[1, 2, 3, 4, 5, 6, 7]} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should rednder dots', async () => {
      expect(screen.getByText(/.../)).toBeInTheDocument();
    });
  });

  describe('should renders when more than 5 pages', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/courses?page=2']}>
          <Provider store={store}>
            <PaginationPages pages={[1, 2, 3, 4, 5, 6, 7]} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should rednder dots', async () => {
      expect(screen.getByText(/.../)).toBeInTheDocument();
    });

    it('should navigate to expected page', async () => {
      await userEvent.click(screen.getByText(/7/));
      expect(screen.getByText(/7/)).toHaveClass('paginationPages__page--isActive');
    });

    it('should navigate to expected page', async () => {
      await userEvent.click(screen.getByText(/1/));
      expect(screen.getByText(/1/)).toHaveClass('paginationPages__page--isActive');
    });
  });
});
