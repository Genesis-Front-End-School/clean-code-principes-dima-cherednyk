import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './NotImplementedPage.scss';

export const NotImplementedPage: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <div className="container">
      <div className="notImplementedPage">
        <h2
          className={
            classNames(
              'notImplementedPage__title', {
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
              'notImplementedPage__message', {
                darkMode,
              },
            )
          }
        >
          We are sorry, but this feature is not implemented yet!
        </p>

        <Link
          className="notImplementedPage__button"
          to="/"
        >
          Back to courses page
        </Link>
      </div>
    </div>
  );
};
