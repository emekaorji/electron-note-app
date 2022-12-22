import React from 'react';
import Nav from '../nav/nav';

type AppWrapperProps = { children: React.ReactNode };

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AppWrapper;
