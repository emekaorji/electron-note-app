/* eslint-disable react/prop-types */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import DataProvider from './dataProvider';

const AppProvider = ({ children }) => {
  return (
    <>
      <Router>
        <DataProvider>{children}</DataProvider>
      </Router>
    </>
  );
};

export default AppProvider;
