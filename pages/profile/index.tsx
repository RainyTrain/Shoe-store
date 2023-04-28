import Information from '@/Components/Information';
import Loading from '@/Components/Loading';
import { useAppDispatch, useAppSelector } from '@/Features/Redux/Hooks';
import { getUserData } from '@/Features/Redux/UserSlice';
import { app } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
  const isAuth = useAppSelector((state) => state.isAuth);
  const auth = getAuth(app);
  const route = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      console.log('Not authorised');
      route.push('/register');
    }
  }, []);

  
  useEffect(() => {
    console.log('token', auth.currentUser);
    dispatch(getUserData(auth.currentUser?.email as string));
  }, []);

  return <>{!isAuth ? <Loading /> : <Information />}</>;
};

export default Profile;
