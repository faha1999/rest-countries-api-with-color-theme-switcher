import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Countries } from './components/allCountries/Countries';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Countries />} />
      </Routes>
    </>
  );
};
