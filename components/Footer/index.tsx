import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <div>Logo</div>
        <div>Designed by me</div>
      </div>
      <div className={style.links}>Links</div>
    </footer>
  );
};

export default Footer;
