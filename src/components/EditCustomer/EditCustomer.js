import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { editableCustomer } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'

const EditCustomer = ({ customerInfo, removeModal }) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const { email, firstName, lastName, phone } = customerInfo
    console.log(phone, "Phone Number Customer")
    const moveToCustomersTable = () => {
        history.push('/customers-table');
    }
    const validate = Yup.object({
        firstName: Yup.string().max(15, 'Must less than 15').required('First Name Required'), lastName: Yup.string().max(15, 'Must less than 15').required('Last Name Required'), phone: Yup.string().required('Phone Required'),
        email: Yup.string().email('Invalid email').required('Email Required'),
    })

    return (
        <Formik validateOnMount initialValues={{
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        }} onSubmit={(values) => {
            setIsLoading(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}${editableCustomer}`, values).then((response) => {
                setIsLoading(false)
                sweetalert('Customer Edit Sucessful', 'success', moveToCustomersTable)
                removeModal()
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
                    <h1 className='text-center mt-2'>Edit  Customer</h1>
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
                                <input type="number" name='phone' placeholder='Phone Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.phone}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.phone && formik.errors.phone && <span className='error-inner-text'>{formik.errors.phone}</span>}</div>
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
                        <div className='d-flex mx-3'>
                            <button disabled={isLoading ? true : false} className='mt-3 px-5 btn mx-5  btn-primary' type="submit" >Add</button>
                            <button disabled={isLoading ? true : false} className='mt-3 px-5 btn btn-primary' onClick={() => removeModal()}  >Cancel</button>
                        </div>
                    </div>

                </Form>
            }

        </Formik>

    )

};

export default EditCustomer;
