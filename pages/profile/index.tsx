import Loading from '@/components/Loading';
import { useAppDispatch, useAppSelector } from '@/Features/Redux/Hooks';
import { getUserData } from '@/Features/Redux/UserSlice';
import { app, userSignOut } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usersRef } from '../../Firebase/config';

const Profile = () => {
  const isAuth = useAppSelector((state) => state.isAuth);
  const auth = getAuth(app);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!isAuth) {
      console.log('Not authorised');
      route.push('/register');
    }
  });

  useEffect(() => {
    dispatch(getUserData(auth.currentUser?.email as string));
  }, []);

  return (
    <>
      {!isAuth ? (
        <Loading />
      ) : (
        <>
          <div>
            {user.name} {user.surname} Profile
          </div>
          <button onClick={() => console.log(user)}>Get data</button>
          <button onClick={() => userSignOut(auth, route, dispatch)}>Log out</button>
        </>
      )}
    </>
  );
};

export default Profile;
