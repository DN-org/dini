import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import Footer from './components/navigations/Footer/Footer';
import Header from './components/navigations/Header/Header';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>

      <Footer/>
    </>
  );
};
