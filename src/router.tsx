//Packages
import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import AdminPage from "./components/pages/AdminPage/AdminPage";
import CataloquePage from "./components/pages/CataloquePage/CatalogPage";
import DevPage from "./components/pages/DevPage/DevPage";
import HomePage from "./components/pages/HomePage/HomePage";
import MediaPage from "./components/pages/MediaPage/MediaPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import SignInPage from "./components/pages/SignInPage/SignInPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";

//Components
import Footer from "./components/navigations/Footer/Footer";
import Header from "./components/navigations/Header/Header";
import ActorPage from "./components/pages/ActorPage/ActorPage";
import TestPage from "./components/pages/TestPage/TestPage";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<DevPage />} />
        <Route path="/Actor" element={<ActorPage />} />
        <Route path="/Test" element={<TestPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Media" element={<MediaPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Cataloque" element={<CataloquePage />} />
      </Routes>

      <Footer />
    </>
  );
};
