/* eslint-disable react/prop-types */
import { MemoryRouter as Router } from 'react-router-dom';
import AuthProvider from './authProvider';
import DataProvider from './dataProvider';

const AppProvider = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <Router>{children}</Router>
        </DataProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
