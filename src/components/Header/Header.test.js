import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { App } from '../../App';
import { Header } from './Header';

describe('Header', () => {
  describe('should render component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    it('renders Header component', () => {
      expect(screen.getByText(/ENGLISH/)).toBeInTheDocument();
      expect(screen.getByText(/HOMETASK/)).toBeInTheDocument();
      expect(screen.getByText(/COURSES/)).toBeInTheDocument();
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
      expect(screen.getByText(/not implemented yet/i)).toBeInTheDocument();
    });
    it('verify page content for expected route after navigating on HOMETASK in header', async () => {
      await userEvent.click(screen.getByText(/HOMETASK/));
      expect(screen.getByText(/not implemented yet/i)).toBeInTheDocument();
    });
  });

  describe('should navigate to courses page', () => {
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
      await userEvent.click(screen.getByAltText(/headerLogo/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });

    it('verify page content for expected route after navigating to CoursesPage', async () => {
      await userEvent.click(screen.getByText(/COURSES/));
      expect(screen.getByText(/COURSES/)).toBeInTheDocument();
    });
  });
});
