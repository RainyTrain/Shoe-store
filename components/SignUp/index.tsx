import { useFormik } from 'formik';
import React from 'react';
import style from './SignUp.module.scss';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { app, usersRef } from '@/Firebase/config';
import { addDoc, getDocs } from 'firebase/firestore';

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

type CreateUserType = {
  auth: Auth;
  email: string;
  password: string;
};

const SignUp: React.FC<SignUpPropsType> = ({ isRegistered, setRegistered }) => {
  const auth = getAuth(app);

  const handleRegister = () => {
    setRegistered((prev) => !prev);
  };

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
      console.log("You've been registered!");
    },
  });

  const isSubmiting = formik.isValid && Object.keys(formik.touched).length > 0 ? true : false;

  const handleSubmit = async ({ auth, email, password }: CreateUserType) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const getData = await getDocs(usersRef);
        const userData = {
          id: getData.docs.length + 1,
          // token: auth.currentUser?.getIdToken(),
          name: formik.values.name,
          surname: formik.values.surname,
          email: formik.values.email,
        };
        await addDoc(usersRef, userData).then(() => console.log('User added to colletion'));
        setTimeout(() => {
          handleRegister;
        });
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
        <div className={style.signup}>
          <div className={style.logo}>Sign up!</div>
          <label htmlFor="name">
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
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
              value={formik.values.surname}
            />
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
              value={formik.values.email}
            />
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
              value={formik.values.password}
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
              value={formik.values.confirmPassword}
            />
          </label>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className={style.selected}>{formik.errors.confirmPassword}</div>
          ) : null}
          <div onClick={handleRegister} className={style.account}>
            Create account!
          </div>
          {isSubmiting ? (
            <button
              onClick={() =>
                handleSubmit({
                  auth: auth,
                  email: formik.values.email,
                  password: formik.values.password,
                })
              }>
              Register!
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
