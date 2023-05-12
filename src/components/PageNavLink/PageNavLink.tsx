import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar__item', {
          'is-active': isActive,
          dark: darkMode,
        },
      )}
    >
      {text}
    </NavLink>
  );
};
