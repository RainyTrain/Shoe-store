import { useAppSelector } from '@/Features/Redux/Hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Profile = () => {
  const isAuth = useAppSelector((state) => state.isAuth);
  const route = useRouter();
  useEffect(() => {
    if (!isAuth) {
      console.log('Not authorised')
      route.push('/register');
    }
  });
  return (
    <>
      <div>Profile</div>
    </>
  );
};

export default Profile;
