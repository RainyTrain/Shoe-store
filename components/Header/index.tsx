import Link from 'next/link';
import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
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
