import { useAppDispatch, useAppSelector } from '@/Features/Redux/Hooks';
import { app, userSignOut } from '@/Firebase/config';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import style from './Information.module.scss';

const Information = () => {
  const auth = getAuth(app);
  const user = useAppSelector((state) => state.user);
  const route = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className={style.info}>
      <div className={style.side}>Logo</div>
      <div className={style.main}>
        <div className={style.personal}>
          {user.name} {user.surname} Profile
        </div>
        <button onClick={() => console.log(user)}>Get data</button>
        <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button>{' '}
        <button
          onClick={() => {
            updatePassword(auth.currentUser!, 'Adrian2001');
            console.log(auth.currentUser);
          }}>
          Change password
        </button>
        <button
          onClick={() => {
            updateEmail(auth.currentUser!, 'adrian@gmail.com');
            console.log(auth.currentUser);
          }}>
          Change email
        </button>
      </div>
    </div>
  );
};

export default Information;
