import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { createCustomer } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import Signature from '../Signature';
const dropdownOptions = [
    { key: 'Select an option', value: '' },
   { key: 'Google', value: 'rOption1' },
   { key: 'Facebook', value: 'rOption2' },
   { key: 'Twitter', value: 'rOption3' },
   { key: 'Linkedin', value: 'rOption4' },
   { key: 'Other', value: 'rOption5' }
]
const CreateCustomer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [signature, setSignature] = useState(false)
    const history = useHistory();
    const moveToCustomersList = () => {
        history.push('/customers-table');
    }
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must less than 15').required('First Name Required'), lastName: Yup.string().max(15, 'Must less than 15').required('Last Name Required'), phoneNumber: Yup.string().required('Phone Required'),
        email: Yup.string().email('Invalid email').required('Email Required'),
        findUs: Yup.string().required('Required'),
    })

    return (
       
        <Formik validateOnMount initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            findUs:''
        }} onSubmit={(values) => {
            setIsLoading(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}${createCustomer}`, values).then((response) => {
                setIsLoading(false)
                sweetalert('Customer Create Sucessful', 'success', moveToCustomersList)
            }).catch((error) => {
                setIsLoading(false)
                sweetalert('Something Went Wrong', 'error')
            });
        }
        }
            validationSchema={validate}>
            {
                (formik) => <Form className='form'>
                    {isLoading && <Loader />}
                    <h1 className='text-center mt-3'>Create  Customer</h1>
                     <div className='content-overflow'>
                    <div className="d-flex align-items-center overlay flex-column mt-3   justify-content-center gap-3 create-customer-main mx-2">
                        <div className="col-12 col-sm-5 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                            <div className='form-field' >
                                <input type="text" name='firstName' className="form-control"
                                    placeholder='First Name' id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.firstName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.firstName && formik.errors.firstName && <span className='error-inner-text'>{formik.errors.firstName}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5">
                            <div className='form-field' >
                                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                <input type="text" name='lastName' placeholder='Last Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.lastName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.lastName && formik.errors.lastName && <span className='error-inner-text'>{formik.errors.lastName}</span>}</div>

                        </div>
                        <div className="col-12 col-sm-5">
                            <div className='form-field' >

                                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                <input type="number" name='phoneNumber' placeholder='Phone Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.phoneNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.phoneNumber && formik.errors.phoneNumber && <span className='error-inner-text'>{formik.errors.phoneNumber}</span>}</div>
                        </div>
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
                       
                        <div className='col-12 col-sm-5 '>
                            <label htmlFor="exampleInputEmail1" className="form-label">How did You find Us?</label>
                            <br />
                            <Field as='select' name="status" >
                                {dropdownOptions.map(option => {
                                    return (
                                        <option key={option.value} value={option.value}>
                                            {option.key}
                                        </option>
                                    )
                                })}
                            </Field>
                            <div className='error-text'>{formik.touched.findUs && formik.errors.findUs && <span className='error-inner-text'>{formik.errors.findUs}</span>}</div>
                        </div>
                        <div>
                        {
                            signature?(
                                <Signature/>
                            ):null
                        }
                          
                        </div>
                        <button onClick={()=>setSignature(true)} type='button' className='mt-3 px-5 btn btn-danger' >Add Signature </button>
                       
                        <div className="d-flex ">
                            <button disabled={isLoading ? true : false} className='mt-3 px-5 btn btn-success ' type="submit" >Submit </button>

                            <Link to='/customers-table'>
                                <button disabled={isLoading ? true : false} className='mt-3 px-5 btn btn-primary ms-3'  >Cancel </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </Form>
            }

        </Formik>
      

    )

};

export default CreateCustomer;
