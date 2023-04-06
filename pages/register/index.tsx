import Loading from '@/components/Loading';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import { app } from '@/Firebase/config';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const Register = () => {
  const [isRegistered, setRegistered] = useState<boolean>(true);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      router.push('/profile');
    }
  }, []);

  return (
    <>
      {auth.currentUser ? (
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
