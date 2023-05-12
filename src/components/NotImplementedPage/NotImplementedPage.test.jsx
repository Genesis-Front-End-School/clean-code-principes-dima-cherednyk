import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { NotImplementedPage } from './NotImplementedPage';
import store from '../../app/store';
import { App } from '../../App';

describe('NotImplementedPage', () => {
  describe('should render component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <NotImplementedPage />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('renders NotImplementedPage component', () => {
      expect(screen.getByText(/not implemented/)).toBeInTheDocument();
    });
    it('should have link to courses', () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });

  describe('should navigate to NotImplementedPage', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('verify page content for expected route after navigating on ENGLISH in header', async () => {
      await userEvent.click(screen.getByText(/ENGLISH/));
      expect(screen.getByText(/not implemented yet/)).toBeInTheDocument();
    });

    it('verify page content for expected route after navigating on HOMETASK in header', async () => {
      await userEvent.click(screen.getByText(/HOMETASK/));
      expect(screen.getByText(/not implemented yet/)).toBeInTheDocument();
    });

    it('verify page content for expected route after navigating on RIGHTS in footer', async () => {
      await userEvent.click(screen.getByText(/RIGHTS/));
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });
  });

  describe('should navigate to courses page', () => {
    it('verify page content for expected route after navigating to CoursesPage', async () => {
      const startRoute = '/notImplementedPage';

      render(
        <MemoryRouter initialEntries={[startRoute]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      await userEvent.click(screen.getByText(/Back to courses page/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });
  });

  describe('should navigate to notFoundPage', () => {
    it('verify page content for expected route after navigating to non-existent tab', async () => {
      const startRoute = '/undefined';

      render(
        <MemoryRouter initialEntries={[startRoute]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByText(/Page not found/)).toBeInTheDocument();
    });
  });
});
