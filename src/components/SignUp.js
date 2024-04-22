import { Form, Formik } from "formik";
import React from "react";
import { TextField } from './TextField';
import * as Yup from 'yup';


export const SignUp = () => {
  const validate = Yup.object().shape({
    firstName: Yup.string()
    .min(2,"Too Short!!")
    .max(15,"Too Long!!")
    .required("Required"),
    lastName: Yup.string()
    .min(2,"Too Short!!")
    .max(15,"Too Long!!")
    .required("Required"),
    email:Yup.string().email('Invalid email').required('Required'),
    password:Yup.string()
    .min(6,"Password must be 6 Characters long")
    .required("Required"),
    confirmpassword:Yup.string()
    .oneOf( [Yup.ref('password'),null],"Password must match" )
    .required("Required"),
  }) 
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => ( // Corrected: Added parentheses to render JSX
          <div className="align-items-center">
            <h1 className="my-4 font-weight-bold text-center .display-4">Sign Up</h1>
            <Form>
              <TextField label="First Name" name="firstName" type="text" /> 
              <TextField label="Last Name" name="lastName" type="text" /> 
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField label="Confirm Password" name="confirmpassword" type="password" />
              <button type="submit" className="btn btn-dark mt-3 mx-3">Sign Up</button> 
              <button type="reset" className="btn btn-dark mt-3">Reset</button> 
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
