import style from './Footer.module.scss';
import { BsInstagram, BsFacebook } from 'react-icons/Bs';
import { MdOutlineMailOutline } from 'react-icons/Md';
import profilePic from '../../Assets/logo.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <div>
          <Image src={profilePic} alt="Logo" width={50} height={50} />
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
