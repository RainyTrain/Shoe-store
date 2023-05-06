import { ThemeContext } from '@/Context/ThemeContext';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import style from './header.module.scss';
import profilePic from '../../Assets/logo.png';
import Image from 'next/image';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
    }
  };

  const handleChange = () => {
    headerRef!.current!.classList.toggle(`${style.responsive}`);
  };

  useEffect(() => {
    headerRef.current?.classList.toggle(`${style.dark}`);
  }, [theme]);

  const hideNavbar = () => {
    if (headerRef!.current!.classList.contains(`${style.responsive}`)) {
      headerRef!.current!.classList.remove(`${style.responsive}`);
      buttonRef!.current!.classList.toggle(`${style.active}`);
    }
  };

  const handleClick = () => {
    buttonRef!.current!.classList.toggle(`${style.active}`);
    headerRef!.current!.classList.toggle(`${style.responsive}`);
  };

  return (
    <header ref={headerRef} className={style.header}>
      <div className={style.logo}>
        <Link href="/">
          <Image src={profilePic} alt="Logo" width={50} height={50} onClick={hideNavbar} />
        </Link>
      </div>
      <nav className={style.details}>
        <ul>
          <li>
            <div onClick={hideNavbar}>Sale</div>
          </li>
          <li>
            <div onClick={hideNavbar}>Men</div>
          </li>
          <li>
            <div onClick={hideNavbar}>Women</div>
          </li>
          <li>
            <div onClick={hideNavbar}>Kids</div>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a onClick={hideNavbar}>About</a>
            </Link>
          </li>
          <li>
            <button
              onClick={handleTheme}
              className={theme == 'light' ? '' : `${style.dark}`}></button>
          </li>
        </ul>
      </nav>
      <nav className={style.profile}>
        <ul>
          <li>
            <div onClick={hideNavbar}>Cart</div>
          </li>
          <li>
            <Link href="/register" legacyBehavior>
              <a onClick={hideNavbar}>Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className={style.sidebutton}>
        <button onClick={handleChange}>Sidebar</button>
      </div> */}
      <div ref={buttonRef} onClick={handleClick} className={style.toggle}></div>
    </header>
  );
};

export default Header;
