import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => (
  <div className="Loader" data-cy="loader" role="progressbar">
    <div className="Loader__content" />
  </div>
);
