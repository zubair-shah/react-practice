import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';




 const FormikUsing = () => {
    return(
        <div>
            <h1>
                learning Formik
            </h1>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
     >

            {({isSubmitting}) =>{
               <Form>
                   <form >

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
            <Button variant="outlined" type="submit"  disabled={isSubmitting} color="success" >
             submit
            </Button>
                   </form>

               </Form>
            }
            }
           
        </Formik>
        </div>
    )
}

export default FormikUsing;