import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './layout.module.scss';

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <div className={style.root}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
