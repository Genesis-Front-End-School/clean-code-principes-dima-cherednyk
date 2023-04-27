import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CoursesPage } from './components/CoursesPage/CoursesPage';
import { EnglishPage } from './components/EnglishPage/EnglishPage';
import { HomeTaskPage } from './components/HomeTaskPage/HomeTaskPage';
import { NotFoundPage } from './components/NotFoundPage';
import { NotImplementedPage } from './components/NotImplementedPage';
import { CoursePage } from './components/CoursePage/CoursePage';
import { Footer, Header } from './components';
import { NetworkError } from './components/NetworkError/NetworkError';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="*"
          element={<NotFoundPage />}
        />

        <Route path="/courses">
          <Route
            index
            element={<CoursesPage />}
          />
          <Route
            path=":slug"
            element={<CoursePage />}
          />
        </Route>

        <Route path="/" element={<Navigate to="/courses" replace />} />

        <Route
          path="/english"
          element={<EnglishPage />}
        />

        <Route
          path="/hometask"
          element={<HomeTaskPage />}
        />

        <Route
          path="/notImplementedPage"
          element={<NotImplementedPage />}
        />
      </Routes>

      <Footer />

      <NetworkError />
    </div>
  );
};
