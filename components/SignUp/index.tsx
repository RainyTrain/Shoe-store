import { useFormik } from 'formik';

type InitialValuesType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const formik = useFormik<InitialValuesType>({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      console.log('done');
    },
  });
  return (
    <>
      <form>
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.errors.name && formik.touched.name ? <div>Error in name</div> : null}
        <label htmlFor="surname">
          <input
            name="surname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.errors.surname && formik.touched.surname ? <div>Error in surname</div> : null}
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.errors.email && formik.touched.email ? <div>Error in email</div> : null}
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.errors.password && formik.touched.password ? <div>Error in password</div> : null}
      </form>
    </>
  );
};

export default SignUp;
