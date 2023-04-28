import { ThemeContext } from '@/Context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import style from './header.module.scss';
import profilePic from '../../Assets/logo.png';
import Image from 'next/image';

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
  };

  const router = useRouter();

  return (
    <header className={theme == 'light' ? `${style.header}` : `${style.dark} ${style.header}`}>
      <div className={style.details}>
        <ul>
          <li>
            <Link href="/">
              <div className={style.logo}>
                <Image src={profilePic} alt="Logo" width={50} height={50} />
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
            <button
              onClick={handleTheme}
              className={theme == 'light' ? '' : `${style.dark}`}></button>
          </li>
        </ul>
      </div>
      <div className={style.profile}>
        <ul>
          <li>
            <div>Cart</div>
          </li>
          <li>
            <Link href="/register" legacyBehavior>
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
