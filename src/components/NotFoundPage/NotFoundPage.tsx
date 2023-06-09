import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container">
      <div className="notFoundPage">
        <h2 className="notFoundPage__title">Ooops!</h2>

        <p
          className="notFoundPage__message"
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
