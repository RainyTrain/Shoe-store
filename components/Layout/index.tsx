import React from 'react';
import Header from '../Header';

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
