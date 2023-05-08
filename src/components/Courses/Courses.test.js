import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Courses } from './Courses';
import { UseCourses } from './hooks/UseCourses';
import store from '../../app/store';

jest.mock('./hooks/UseCourses');

const mockCourses = [
  {
    id: 1,
    title: 'Course1',
    lessonsCount: 10,
    previewImageLink: 'https://example.com/preview1.jpg',
    rating: 5,
    meta: {
      slug: 'slug1',
      skills: null,
      courseVideoPreview: {
        link: 'link1',
        duration: 1,
        previewImageLink: 'image1',
      },
    },
  },
  {
    id: 2,
    title: 'Course2',
    lessonsCount: 10,
    previewImageLink: 'https://example.com/preview2.jpg',
    rating: 5,
    meta: {
      slug: 'slug2',
      skills: null,
      courseVideoPreview: {
        link: 'link2',
        duration: 2,
        previewImageLink: 'image2',
      },
    },
  },
];

describe('CoursePage', () => {
  describe('component should renders', () => {
    beforeEach(() => {
      UseCourses.mockReturnValue({
        loading: false,
        courses: mockCourses,
        error: null,
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Courses />
          </Provider>
        </MemoryRouter>,
      );
    });

    it('renders correct number of CourseItem components', () => {
      const courseItemElements = screen.getAllByRole('listitem');

      expect(courseItemElements.length).toBe(mockCourses.length);
    });

    it('renders courses list', () => {
      expect(screen.getByText('Course1')).toBeInTheDocument();
      expect(screen.getByText('Course2')).toBeInTheDocument();
    });

    it('renders component', () => {
      expect(screen.getByText(/Courses/)).toBeInTheDocument();
    });

    it('renders the error component when there is an error', () => {
      UseCourses.mockReturnValue({
        loading: false,
        courses: [],
        error: 'error',
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Courses />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    });

    it('renders the loader component while loading', () => {
      UseCourses.mockReturnValue({
        loading: true,
        courses: [],
        error: '',
      });

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Courses />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });
});
