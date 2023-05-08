import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { App } from '../../App';
import { CoursesPage } from './CoursesPage';

describe('CoursesPage', () => {
  describe('should render component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <CoursesPage />
          </Provider>

        </MemoryRouter>,
      );
    });

    it('renders CoursesPage component', () => {
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });
  });

  describe('should navigate to CoursesPage', () => {
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
});
