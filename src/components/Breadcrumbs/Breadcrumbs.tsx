import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './Breadcrumbs.scss';

type Props = {
  activeCourseTitle: string,
};

export const Breadcrumbs: React.FC<Props> = ({ activeCourseTitle }) => {
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <div className="breadcrumbs" data-cy="breadCrumbs">
      <Link to="/" className="breadcrumbs__link">
        {darkMode
          ? <img src="./img/homeWhite.svg" alt="home" className="icon" />
          : <img src="./img/home.svg" alt="home" className="icon" />}
      </Link>

      <img
        src="./img/arrowRightDisabled.svg"
        alt="arrowLeft"
      />

      <p className="breadcrumbs__activeProduct" title="activeCourseTitle">
        {activeCourseTitle}
      </p>
    </div>
  );
};
