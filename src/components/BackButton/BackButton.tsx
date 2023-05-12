import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './BackButton.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <button
      className={
        classNames(
          'backButton', {
            darkMode,
          },
        )
      }
      type="button"
      onClick={() => navigate(-1)}
      data-cy="backButton"
    >
      {darkMode
        ? <img src="./img/arrowLeftWhite.svg" alt="back" />
        : <img src="./img/arrowLeft.svg" alt="back" />}
      Back
    </button>
  );
};
