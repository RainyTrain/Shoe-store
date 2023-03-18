import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Logo</div>
      <ul>
        <li>
          <div>Hello</div>
        </li>
        <li>
          <div>
            <a href="/about">click</a>
          </div>
        </li>
      </ul>
      <div>Cart</div>
      <div>LOGIN</div>
    </header>
  );
};

export default Header;
