import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { App } from '../../App';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  describe('should render component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('renders NotFoundPage component', () => {
      expect(screen.getByText(/Page not found/)).toBeInTheDocument();
    });
    it('should have link to courses', () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });

  describe('should navigate to courses page', () => {
    it('verify page content for expected route after navigating to CoursesPage', async () => {
      const startRoute = '/NotFoundPage';

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
