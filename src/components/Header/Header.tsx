import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PageNavLink } from '../PageNavLink/PageNavLink';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { actions as darkModeActions } from '../../features/darkMode';
import './Header.scss';

export const Header: React.FC = () => {
  const { darkMode } = useAppSelector(state => state.darkMode);
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="navbar">
        <Link to="/courses" className="navbar__logo">
          {darkMode
            ? <img src="./img/logoWhite.svg" alt="headerLogo" className="logo" />
            : <img src="./img/logo.svg" alt="headerLogo" className="logo" />}
        </Link>

        <div className="navbar__list">
          <PageNavLink to="/courses" text="COURSES" />
          <PageNavLink to="/english" text="ENGLISH" />
          <PageNavLink to="/hometask" text="HOMETASK" />
        </div>

        <SwitchTheme
          checked={darkMode}
          onClick={() => dispatch(darkModeActions.setDarkMode(!darkMode))}
        />
      </nav>
    </>
  );
};
