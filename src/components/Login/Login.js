import React from 'react';
import { Form, Formik } from 'formik';

import * as Yup from 'yup'

const Login = () => {

    const validate = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email Required'), password: Yup.string().required('Password Required'), 

    })
    return (

        <Formik validateOnMount initialValues={{
            email: '',
            password: ''

        }} onSubmit={(values) => {
            
            alert(JSON.stringify(values, null, 2))
        }
        }
            validationSchema={validate}>
            {
                (formik) => <Form>
                    <h1 className='text-center mt-2'>Login</h1>
                        <div className="d-flex align-items-center flex-column mt-3   justify-content-center gap-3 create-customer-main mx-2">
                              
                                
                                <div className="col-12 col-sm-5">
                                <div className='form-field' >

                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="text" name='email' placeholder='Enter Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        />
                                        </div>
                                    <div className='error-text'>{formik.touched.email && formik.errors.email && <span className='error-inner-text'>{formik.errors.email}</span>}</div>
                                </div>
                                <div className="col-12 col-sm-5">
                                <div className='form-field' >

                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                    <input type="password" name='password' placeholder='Phone Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        value={formik.values.password}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        />
                                        </div>
                                    <div className='error-text'>{formik.touched.password && formik.errors.password && <span className='error-inner-text'>{formik.errors.password}</span>}</div>
                                </div>
                                <button  className='  mt-3 fs-5 px-5 btn btn-success' type="submit" >Login </button>
                        </div>
                        
                   
                </Form>
            }

        </Formik>

    )

};

export default Login;
