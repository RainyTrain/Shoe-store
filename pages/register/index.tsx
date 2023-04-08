import Loading from '@/components/Loading';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import { useAppSelector } from '@/Features/Redux/Hooks';
import { app } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Register = () => {
  const [isRegistered, setRegistered] = useState<boolean>(true);
  const auth = getAuth(app);
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.isAuth);

  useEffect(() => {
    if (isAuth) {
      router.push('/profile');
    }
  }, []);

  return (
    <>
      {isAuth ? (
        <Loading />
      ) : isRegistered ? (
        <SignIn isRegistered={isRegistered} setRegistered={setRegistered} />
      ) : (
        <SignUp isRegistered={isRegistered} setRegistered={setRegistered} />
      )}
    </>
  );
};

export default Register;
