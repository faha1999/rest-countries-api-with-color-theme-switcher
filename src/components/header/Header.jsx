import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './partials/Toggler';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <Toggle />
        </nav>
      </header>
    </>
  );
};