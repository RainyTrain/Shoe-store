import { ThemeContext } from '@/Context/ThemeContext';
import Link from 'next/link';
import { useContext } from 'react';
import style from './header.module.scss';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
    }
    console.log(theme)
  };

  return (
    <header  className={theme == 'light' ? `${style.header}` : `${style.dark} ${style.header}`}>
      <div className={style.details}>
        <ul>
          <li>
            <Link href="/">
              <div className={style.logo}>
                <img src="https://cdn-icons-png.flaticon.com/512/1785/1785348.png" alt="Logo" />
              </div>
            </Link>
          </li>
          <li>
            <div>Sale</div>
          </li>
          <li>
            <div>Men</div>
          </li>
          <li>
            <div>Women</div>
          </li>
          <li>
            <div>Kids</div>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <button onClick={handleTheme} className={theme == 'light' ? '' : `${style.dark}`}></button>
          </li>
        </ul>
      </div>
      <div className={style.profile}>
        <ul>
          <li>
            <div>Cart</div>
          </li>
          <li>
            <div>LOGIN</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
