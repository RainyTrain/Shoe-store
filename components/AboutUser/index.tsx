import { useAppSelector } from '@/Features/Redux/Hooks';
import { app, newEmail, newPassword } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRef, useState } from 'react';
import style from './AboutUser.module.scss';

const AboutUser = () => {
  const auth = getAuth(app);

  const user = useAppSelector((state) => state.user);

  const emailRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>(auth.currentUser!.email!);

  return (
    <>
      {!active ? (
        <div className={style.details}>
          <div className={style.personal}>
            {user.name} {user.surname}
          </div>
          <div className={style.email}>{auth.currentUser?.email}</div>
        </div>
      ) : (
        <div className={style.change}>
          <label htmlFor="email">
            <span>Email</span>
            <input ref={emailRef} name="email"></input>
            <button onClick={() => newEmail(auth, emailRef.current?.value!)}>Update</button>
          </label>
          <br />
          <label htmlFor="password">
            <span>Password</span>
            <input name="password" type="password"></input>
          </label>
        </div>
      )}
      <div className={style.button}>
        <button
          onClick={() => {
            setActive(!active);
          }}>
          Edit profile
        </button>
      </div>
    </>
  );
};

export default AboutUser;
