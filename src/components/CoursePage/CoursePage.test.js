import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { CoursePage } from './CoursePage';
import '@testing-library/jest-dom';
import { UseActiveCourse } from './hooks/UseActiveCourse';

jest.mock('./hooks/UseActiveCourse');

const mockCourse = {
  title: 'Title of course',
  description: 'description',
  lessons: [
    {
      id: '1',
      title: 'title1',
      duration: 1,
      order: 1,
      type: 'type1',
      status: 'status1',
      link: 'link1',
      previewImageLink: 'image1',
      meta: null,
    },
    {
      id: '2',
      title: 'title2',
      duration: 2,
      order: 2,
      type: 'type2',
      status: 'status2',
      link: 'link2',
      previewImageLink: 'image2',
      meta: null,
    },
  ],
};

describe('CoursePage', () => {
  describe('should renders the component', () => {
    it('renders the course description', () => {
      UseActiveCourse.mockReturnValue({
        activeCourse: mockCourse,
        error: null,
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <CoursePage />
          </Provider>
        </MemoryRouter>,
      );

      const courseDescription = screen.getByText('description');

      expect(courseDescription).toBeInTheDocument();
    });
  });

  describe('component should renders loader', () => {
    it('should render loader before load data', () => {
      UseActiveCourse.mockReturnValue({
        activeCourse: null,
        error: null,
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <CoursePage />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  describe('component should renders error', () => {
    it('should render error component', () => {
      UseActiveCourse.mockReturnValue({
        activeCourse: null,
        error: 'error',
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <CoursePage />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });
  });
});
