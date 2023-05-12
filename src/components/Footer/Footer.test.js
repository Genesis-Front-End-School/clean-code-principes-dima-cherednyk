import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { App } from '../../App';
import { Footer } from './Footer';

window.scrollTo = jest.fn();

describe('Footer', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </MemoryRouter>,
    );

    it('renders Footer component', () => {
      expect(screen.getByText(/GITHUB/)).toBeInTheDocument();
      expect(screen.getByText(/RIGHTS/)).toBeInTheDocument();
      expect(screen.getByText(/Back to top/)).toBeInTheDocument();
    });
  });

  describe('should navigate to NotFoundPage', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('verify page content for expected route after navigating on RIGHTS in footer', async () => {
      await userEvent.click(screen.getByText(/RIGHTS/));
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });
  });

  describe('should navigate to expected page', () => {
    beforeEach(() => {
      const startRoute = '/notImplementedPage';

      render(
        <MemoryRouter initialEntries={[startRoute]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('verify page content for expected route after navigating to CoursesPage', async () => {
      await userEvent.click(screen.getByAltText(/footerLogo/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });

    it('verify page content for expected route after navigating to NotFoundPage', async () => {
      await userEvent.click(screen.getByText(/RIGHTS/));
      expect(screen.getByText(/Page not found/)).toBeInTheDocument();
    });
  });

  describe('should stay on page', () => {
    beforeEach(() => {
      const startRoute = '/courses';

      render(
        <MemoryRouter initialEntries={[startRoute]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('should stay on coursesPage', async () => {
      await userEvent.click(screen.getByText(/Back to top/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });

    it('should stay on NotFoundPage', async () => {
      await userEvent.click(screen.getByAltText(/up/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
