import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import { useRef, useState } from 'react';

const Register = () => {
  const [isRegistered, setRegistered] = useState<boolean>(true);
  return (
    <>
      {isRegistered ? (
        <SignIn isRegistered={isRegistered} setRegistered={setRegistered} />
      ) : (
        <SignUp isRegistered={isRegistered} setRegistered={setRegistered} />
      )}
    </>
  );
};

export default Register;
