import SignUp from '@/components/SignUp';
import { useState } from 'react';

const Register = () => {
  const [isRegistered, setRegistered] = useState<boolean>(true);
  return (
    <>
      <SignUp isRegistered={isRegistered} setRegistered={setRegistered} />
    </>
  );
};

export default Register;
