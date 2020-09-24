import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const SignupForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),

    onSubmit: async values => {
        await sleep(500);
      alert(JSON.stringify(values, null, 2));
      window.location.href = "/mylists";
    },
  });

  return (

    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName"></label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />

      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName"></label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />

      {formik.touched.lastName && formik.errors.lastName ? (

        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (

        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>

  );
};

export default SignupForm;