import React from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../app/hooks';
import './Error.scss';

export const Error: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <div className="error">
      <h2
        className={
          classNames(
            'error__title', {
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
            'error__message', {
              darkMode,
            },
          )
        }
      >
        Something went wrong!
      </p>
    </div>
  );
};
