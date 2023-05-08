import React from 'react';
import { Provider } from 'react-redux';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import store from '../../app/store';
import '@testing-library/jest-dom';
import { ActiveCourse } from './ActiveCourse';

describe('ActiveCourse', () => {
  describe('component renders', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <ActiveCourse
              title="title"
              description="description"
              lessons={[
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
                  status: 'locked',
                  link: 'link2',
                  previewImageLink: 'image2',
                  meta: null,
                },
              ]}
            />
          </Provider>
        </MemoryRouter>,
      );
    });
    it('should render ActiveCourse component', () => {
      expect(screen.getByText(/title1/)).toBeInTheDocument();
      expect(screen.getByText(/title2/)).toBeInTheDocument();
    });

    it('should check availible lesson', async () => {
      await userEvent.click(screen.getByText(/title2/));
      expect(screen.getByText(/Complete all required and all optional quests on the topic to unlock video./)).toBeInTheDocument();
    });
  });

  describe('check video link', () => {
    it('should display previewImage if video link is null', async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <ActiveCourse
              title="title"
              description="description"
              lessons={[
                {
                  id: '1',
                  title: 'title1',
                  duration: 1,
                  order: 1,
                  type: 'type1',
                  status: 'open',
                  link: null,
                  previewImageLink: 'image1',
                  meta: null,
                },
                {
                  id: '2',
                  title: 'title2',
                  duration: 2,
                  order: 2,
                  type: 'type2',
                  status: 'open',
                  link: null,
                  previewImageLink: 'image2',
                  meta: null,
                },
              ]}
            />
          </Provider>
        </MemoryRouter>,
      );

      expect(screen.getByAltText('previewImage')).toBeInTheDocument();
    });
  });

  describe('ActiveCourse redux testing', () => {
    it('should change user last lesson through redux', async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <ActiveCourse
              title="title"
              description="description"
              lessons={[
                {
                  id: '1',
                  title: 'title1',
                  duration: 1,
                  order: 1,
                  type: 'type1',
                  status: 'locked',
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
                  status: 'open',
                  link: 'link2',
                  previewImageLink: 'image2',
                  meta: null,
                },
              ]}
            />
          </Provider>
        </MemoryRouter>,
      );

      await userEvent.click(screen.getByText(/title2/));
      expect(screen.getByAltText('play')).toBeInTheDocument();
    });
  });

  describe('check error message', () => {
    it('error message should disapear after timeout', async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <ActiveCourse
              title="title"
              description="description"
              lessons={[
                {
                  id: '1',
                  title: 'title1',
                  duration: 1,
                  order: 1,
                  type: 'type1',
                  status: 'locked',
                  link: null,
                  previewImageLink: 'image1',
                  meta: null,
                },
                {
                  id: '2',
                  title: 'title2',
                  duration: 2,
                  order: 2,
                  type: 'type2',
                  status: 'locked',
                  link: null,
                  previewImageLink: 'image2',
                  meta: null,
                },
              ]}
            />
          </Provider>
        </MemoryRouter>,
      );

      await userEvent.click(screen.getByText(/title2/));
      await waitForElementToBeRemoved(screen.getByText(/Complete all required and all optional quests on the topic to unlock video./), {
        timeout: 3000,
      });
    });
  });
});
