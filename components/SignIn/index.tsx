import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
import style from './Signin.module.scss';
import { getAuth, Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/Firebase/config';
import { useAppDispatch } from '@/Features/Redux/Hooks';
import { setAuth } from '@/Features/Redux/UserSlice';

type SignUpPropsType = {
  isRegistered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

type InitialValuesType = {
  email: string;
  password: string;
};

type CreateUserType = {
  auth: Auth;
  email: string;
  password: string;
};

const SignIn: React.FC<SignUpPropsType> = ({ isRegistered, setRegistered }) => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const auth = getAuth(app);

  const handleRegister = () => {
    setRegistered((prev) => !prev);
  };

  const formik = useFormik<InitialValuesType>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email adress!').required('This field is required!'),
      password: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'Invalid password')
        .required('This field is required!'),
    }),
    onSubmit: () => {
      console.log("You've been logged in!");
    },
  });

  const isSubmiting = formik.isValid && Object.keys(formik.touched).length > 0 ? true : false;

  const handleSubmit = async ({ auth, email, password }: CreateUserType) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setAuth(true));
        setTimeout(() => {
          route.push('/profile');
        }, 3000);
        console.log('You are sign up!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error:', errorCode, errorMessage);
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}>
        <div className={style.signin}>
          <div className={style.logo}>Sign in!</div>
          <label htmlFor="email">
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}></input>
          </label>

          {formik.errors.email && formik.touched.email ? (
            <div className={style.selected}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}></input>
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div className={style.selected}>{formik.errors.password}</div>
          ) : null}
          <div onClick={handleRegister} className={style.account}>
            Already have account?
          </div>
          {isSubmiting ? (
            <button
              onClick={() => {
                handleSubmit({
                  auth: auth,
                  email: formik.values.email,
                  password: formik.values.password,
                });
              }}>
              Register!
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
