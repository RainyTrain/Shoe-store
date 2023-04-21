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
  const [currentValue, setCurrentValue] = useState<string>('');
  const [password, hanldlePassword] = useState<string>('');
  const [errorPassword, handleErrorPassword] = useState<boolean>(false);

  const changeEmail = async () => {
    if (currentValue !== auth.currentUser!.email) {
      await newEmail(auth, currentValue);
    } else {
      console.log('Emails are the same!');
    }
  };

  const changePassword = async () => {
    await newPassword(auth, password, handleErrorPassword);
    console.log('Error in password');
  };

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
            <input
              ref={emailRef}
              name="email"
              value={currentValue}
              onChange={(event) => setCurrentValue(event.target.value)}
              onFocus={() => console.log('focus')}></input>
            <button onClick={changeEmail}>Update email</button>
          </label>
          <br />
          <label htmlFor="Password">
            <span>New password</span>
            <input
              name="Password"
              type="password"
              onChange={(event) => hanldlePassword(event.target.value)}
              className={errorPassword ? style.error : ''}></input>
            <button onClick={changePassword}>Update password</button>
          </label>
        </div>
      )}
      <div className={style.button}>
        <button
          onClick={() => {
            setActive(!active);
            setCurrentValue(auth.currentUser!.email!);
            handleErrorPassword(false);
          }}>
          {active ? 'Save' : 'Edit profile'}
        </button>
      </div>
    </>
  );
};

export default AboutUser;
