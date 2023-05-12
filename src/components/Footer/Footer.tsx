import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './Footer.scss';

export const Footer: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.darkMode);
  const location = useLocation();

  return (
    <div className="footer">
      <div className="footer__content">
        <Link to="/courses" className="footer__logo">
          {darkMode
            ? <img src="./img/logoWhite.svg" alt="footerLogo" className="logo" />
            : <img src="./img/logo.svg" alt="footerLogo" className="logo" />}
        </Link>

        <div className="footer__list">
          <a
            href="https://github.com/"
            target="_blank"
            className="footer__item"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <Link to="/contacts" className="footer__item">CONTACTS</Link>
          <Link to="/rights" className="footer__item">RIGHTS</Link>
        </div>

        <div className="footer__up">
          <Link
            className="footer__text"
            onClick={() => window.scrollTo(0, 0)}
            to={`${location.pathname}`}
          >
            Back to top
          </Link>

          <button
            type="button"
            className={
              classNames(
                'footer__button', {
                  darkMode,
                },
              )
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            {darkMode
              ? <img src="./img/arrowUpWhite.svg" alt="up" />
              : <img src="./img/arrowUp.svg" alt="up" />}
          </button>
        </div>
      </div>
    </div>
  );
};
