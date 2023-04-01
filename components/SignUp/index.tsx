import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import style from './SignUp.module.scss';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

type SignUpPropsType = {
  isRegistered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

type InitialValuesType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC<SignUpPropsType> = ({ isRegistered, setRegistered }) => {
  const { push } = useRouter();
  const handleRegister = () => {
    setRegistered((prev) => !prev);
  };
  useEffect(() => {
    console.log(formik.isValid, formik.touched);
  });

  const formik = useFormik<InitialValuesType>({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name is too short!')
        .max(10, 'Name is too long!')
        .required('This field is required!'),
      surname: Yup.string()
        .min(3, 'Surname is too short!')
        .max(10, 'Surname is too long!')
        .required('This field is required!'),
      email: Yup.string().email('Invalid email adress!').required('This field is required!'),
      password: Yup.string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'Invalid password')
        .required('This field is required!'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must be the same!')
        .required('This field is required!'),
    }),
    onSubmit: () => {
      console.log('xxx');
    },
  });

  const isSubmiting = formik.isValid && Object.keys(formik.touched).length > 0 ? true : false;

  const handleSubmit = () => {
    console.log('done');
    // setTimeout(() => {
    //   push('/about');
    // }, 3000);
  };

  return (
    <>
      <form>
        <div className={style.signup}>
          <div className={style.logo}>Sign up!</div>
          <label htmlFor="name">
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
          </label>
          {formik.errors.name && formik.touched.name ? (
            <div className={style.selected}>{formik.errors.name}</div>
          ) : null}
          <label htmlFor="surname">
            <input
              name="surname"
              type="text"
              placeholder="Surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
          </label>
          {formik.errors.surname && formik.touched.surname ? (
            <div className={style.selected}>{formik.errors.surname}</div>
          ) : null}
          <label htmlFor="email">
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <br />
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
            />
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div className={style.selected}>{formik.errors.password}</div>
          ) : null}
          <label htmlFor="confirmPassword">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className={style.selected}>{formik.errors.confirmPassword}</div>
          ) : null}
          <div onClick={handleRegister} className={style.account}>
            Already have account?
          </div>
          {isSubmiting ? <button onClick={handleSubmit}>Register!</button> : null}
        </div>
      </form>
    </>
  );
};

export default SignUp;
