import React, { useEffect, useState } from 'react';
import './NetworkError.scss';

export const NetworkError: React.FC = () => {
  const [isOnline, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));

    return () => {
      window.removeEventListener('online', () => setOnline(true));
      window.removeEventListener('offline', () => setOnline(false));
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="networkError">
      <h5 className="networkError__title">Network problem</h5>
      <p className="networkError__message">
        You are
        {' '}
        <b>offline</b>
      </p>
    </div>
  );
};
