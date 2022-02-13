import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { login } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader';



const Login = () => {
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();
    const validate = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email Required'), password: Yup.string().required('Password Required'),

    })
    const moveToCreateCustomer = () => {
        history.push('/create-customer')
    }
    return (

        <Formik validateOnMount initialValues={{
            email: '',
            password: ''

        }} onSubmit={async (values) => {
            setIsLoading(true)
            await axios.post(`${process.env.REACT_APP_BASE_URL}${login}`, values).then((response) => {
                setIsLoading(false)
                window.localStorage.setItem('user',JSON.stringify(response.data));
                sweetalert('Customer Create Sucessful', 'success', moveToCreateCustomer)
            }).catch((error) => {
                setIsLoading(false)
                sweetalert('Credentials are Wrong', 'error')
            });

        }
        }
            validationSchema={validate}>
            {
                (formik) => <Form className='form'>
                    {isLoading && <Loader />}
                    <h1 className='text-center mt-2'>Login</h1>
                    <div className="d-flex align-items-center overlay flex-column mt-3   justify-content-center gap-3 create-customer-main mx-2">


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
                                <input type="password" name='password' placeholder='Password' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.password && formik.errors.password && <span className='error-inner-text'>{formik.errors.password}</span>}</div>
                        </div>
                        <button disabled={isLoading?true:false} className='  mt-3 fs-5 px-5 btn btn-success' type="submit" >Login </button>
                    </div>


                </Form>
            }

        </Formik>

    )

};

export default Login;
