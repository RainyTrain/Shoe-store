import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
import style from './Signin.module.scss';

type SignUpPropsType = {
  isRegistered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

type InitialValuesType = {
  email: string;
  password: string;
};

const SignIn: React.FC<SignUpPropsType> = ({ isRegistered, setRegistered }) => {
  const route = useRouter();
  const handleRegister = () => {
    setRegistered((prev) => !prev);
  };

  const formik = useFormik({
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
    onSubmit: () => {},
  });

  const isSubmiting = formik.isValid && Object.keys(formik.touched).length > 0 ? true : false;

  const handleSubmit = () => {
    console.log('done');
    setTimeout(() => {
      route.push('/');
    }, 3000);
  };

  return (
    <div>
      <form>
        <div className={style.signin}>
          <div className={style.logo}>Sign in!</div>
          <label htmlFor="email">
            <input
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}></input>
          </label>
          <br />
          {formik.errors.email && formik.touched.email ? (
            <div className={style.selected}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}></input>
          </label>
          <br />
          {formik.errors.password && formik.touched.password ? (
            <div className={style.selected}>{formik.errors.password}</div>
          ) : null}
          <div onClick={handleRegister} className={style.account}>
            Already have account?
          </div>
          {isSubmiting ? <button onClick={handleSubmit}>Register!</button> : null}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
