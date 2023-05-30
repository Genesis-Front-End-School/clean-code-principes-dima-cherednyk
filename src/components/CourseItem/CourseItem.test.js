import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { CourseItem } from './CourseItem';
import store from '../../app/store';
import '@testing-library/jest-dom';

describe('CourseItem', () => {
  describe('component renders', () => {
    it('should render courseItem', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <CourseItem
              title="Title"
              lessonsCount={5}
              previewImageLink="image"
              rating={5}
              meta={{
                slug: 'slug',
                skills: ['smart'],
                courseVideoPreview: {
                  link: 'link',
                  duration: 5,
                  previewImageLink: 'image',
                },
              }}
              id={1}
            />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByText(/Title/)).toBeInTheDocument();
      expect(screen.getByAltText(/product/)).toBeInTheDocument();
      expect(screen.getByText(/Lessons/)).toBeInTheDocument();
      expect(screen.getByText(/Rating/)).toBeInTheDocument();
      expect(screen.getByText(/smart/)).toBeInTheDocument();
    });
  });

  describe('component renders without skills', () => {
    it('should render courseItem', () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <CourseItem
              title="Title"
              lessonsCount={5}
              previewImageLink="image"
              rating={5}
              meta={{
                slug: 'slug',
                skills: null,
                courseVideoPreview: {
                  link: 'link',
                  duration: 5,
                  previewImageLink: 'image',
                },
              }}
              id={1}
            />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByText(/Title/)).toBeInTheDocument();
      expect(screen.getByAltText(/product/)).toBeInTheDocument();
      expect(screen.getByText(/Lessons/)).toBeInTheDocument();
      expect(screen.getByText(/Rating/)).toBeInTheDocument();
      expect(screen.queryByText(/Skills/)).not.toBeInTheDocument();
    });
  });

  describe('courseItem redux testing', () => {
    it('change courseItem status through redux', async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <CourseItem
              title="Title"
              lessonsCount={5}
              previewImageLink="image"
              rating={5}
              meta={{
                slug: 'slug',
                skills: ['smart'],
                courseVideoPreview: {
                  link: 'link',
                  duration: 5,
                  previewImageLink: 'image',
                },
              }}
              id={1}
            />
          </Provider>
        </MemoryRouter>,
      );

      await userEvent.click(screen.getByText(/Start Course/));
      expect(screen.getByText(/Continue/)).toBeInTheDocument();
    });
  });
});
