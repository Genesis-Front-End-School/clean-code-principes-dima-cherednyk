import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { BackButton } from '../BackButton';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <div className="container">
      <BackButton />

      <div className="notFoundPage">
        <h2
          className={
            classNames(
              'notFoundPage__title', {
                darkMode,
              },
            )
          }
        >
          Ooops!
        </h2>

        <p
          className={
            classNames(
              'notFoundPage__message', {
                darkMode,
              },
            )
          }
        >
          Page not found
        </p>

        <Link
          className="notFoundPage__button"
          to="/"
        >
          Back to courses page
        </Link>
      </div>

    </div>
  );
};
