import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

type Props = {
  activeCourseTitle: string,
};

export const Breadcrumbs: React.FC<Props> = ({ activeCourseTitle }) => {
  return (
    <div className="breadcrumbs" data-cy="breadCrumbs">
      <Link to="/" className="breadcrumbs__link">
        <img src="./img/home.svg" alt="home" className="icon" />
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
