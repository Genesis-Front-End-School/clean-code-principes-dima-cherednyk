import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Pagination } from './Pagination';
import store from '../../app/store';

describe('Pagination', () => {
  describe('should render component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/courses']}>
          <Provider store={store}>
            <Pagination coursesAmount={30} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('renders component elements', () => {
      expect(screen.getByAltText(/prevPage/)).toBeInTheDocument();
      expect(screen.getByAltText(/nextPage/)).toBeInTheDocument();
    });

    it('should change status of prevButton', async () => {
      await userEvent.click(screen.getByAltText('nextPage'));
      expect(screen.getByAltText('prevPage')).toBeInTheDocument();
    });

    it('should change the page status', async () => {
      await userEvent.click(screen.getByAltText('nextPage'));
      expect(screen.getByText(/2/)).toHaveClass('paginationPages__page--isActive');
    });

    it('should change status of nextButton if click on last page', async () => {
      await userEvent.click(screen.getByText('3'));
      expect(screen.getByAltText('nextPageDisabled')).toBeInTheDocument();
    });

    it('should change status of prevButton if click on first page', async () => {
      await userEvent.click(screen.getByText('1'));
      expect(screen.getByAltText('prevPageDisabled')).toBeInTheDocument();
    });
  });

  describe('should change page when you are on second page', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/courses?page=2']}>
          <Provider store={store}>
            <Pagination coursesAmount={30} />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should navigate to first page', async () => {
      await userEvent.click(screen.getByAltText('prevPage'));
      expect(screen.getByText(/1/)).toHaveClass('paginationPages__page--isActive');
    });

    it('should navigete to third page', async () => {
      await userEvent.click(screen.getByAltText('nextPage'));
      expect(screen.getByText(/3/)).toHaveClass('paginationPages__page--isActive');
    });
  });
});
