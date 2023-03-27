import style from './Footer.module.scss';
import { BsInstagram, BsFacebook } from 'react-icons/Bs';
import { MdOutlineMailOutline } from 'react-icons/Md';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1785/1785348.png" alt="Logo" />
        </div>
        <div>Your steps matter</div>
        <div>Created by Adrian Senkevich </div>
      </div>
      <div className={style.links}>
        <div>
          <BsInstagram size={25} cursor="pointer" />
          <span>Instagram</span>
        </div>
        <div>
          <BsFacebook size={25} cursor="pointer" />
          <span>Facebook</span>
        </div>
        <div>
          <MdOutlineMailOutline size={25} cursor="pointer" />
          <span>yoursteps@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
