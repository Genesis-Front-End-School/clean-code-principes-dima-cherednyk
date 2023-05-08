import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../../app/store';
import { BackButton } from './BackButton';
import { App } from '../../App';

describe('BackButton', () => {
  describe('should render backButton', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <BackButton />
        </Provider>
      </MemoryRouter>,
    );

    it('verify backButton in page', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('should go back', () => {
    const startRoute = '/courses';

    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[startRoute]}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('verify backButton in pagee', async () => {
      await userEvent.click(screen.getByText(/RIGHTS/));
      await userEvent.click(screen.getByAltText(/back/));
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });
  });
});
