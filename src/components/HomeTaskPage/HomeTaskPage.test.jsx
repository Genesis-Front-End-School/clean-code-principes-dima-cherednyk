import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { App } from '../../App';
import { HomeTaskPage } from './HomeTaskPage';

describe('HomeTaskPage', () => {
  describe('should render component', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <HomeTaskPage />
        </MemoryRouter>,
      );
    });

    it('renders HomeTaskPage component', () => {
      expect(screen.getByText(/not implemented/)).toBeInTheDocument();
    });
    it('should have link to courses', () => {
      expect(screen.getByText('Back to courses page')).toBeInTheDocument();
    });
  });

  describe('should navigate to courses page', () => {
    it('verify page content for expected route after navigating to CoursesPage', async () => {
      const startRoute = '/hometask';

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
