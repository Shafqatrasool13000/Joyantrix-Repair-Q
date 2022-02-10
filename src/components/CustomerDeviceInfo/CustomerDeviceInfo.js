import React from 'react';
import { Form, Formik } from 'formik';

import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { customerDeviceInfo } from '../utils/urls';

const CustomerDeviceInfo = () => {
    const validate = Yup.object({
        deviceName: Yup.string().required('Device Name Required'), model: Yup.string().required('Model Number Required'), serialNumber: Yup.string().required('Serial Number Required'),
        password: Yup.string().required('Password Required'),

    })
    return (

        <Formik validateOnMount initialValues={{
            deviceName: '',
            model: '',
            serialNumber: '',
            password: '',

        }} onSubmit={async (values) => {
            await axios.post(`${process.env.REACT_APP_BASE_URL}${customerDeviceInfo}`,{
                "typeOfRepair": "Screen Issue",
                "estimatedCost": "12",
                "appointmentTime": "3-12-2022",
                "trackingType": "1",
                "trackingNumber": "1",
                "status": 1 
            }).then((response)=>{
               console.log(response.data)

            }).catch((error)=>console.log(error));
                 alert(JSON.stringify(values, null, 2))
             }
             }
            validationSchema={validate}>
            {
                (formik) => <Form>
<h1 className='text-center mt-2'>Device Info</h1>
                    <div className="d-flex align-items-center flex-column mt-3   justify-content-center gap-3 create-customer-main mx-2">
                        <div className="col-12 col-sm-5 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Device Name</label>
                            <div className='form-field' >
                                <input type="text" name='deviceName' className="form-control"
                                    placeholder='Device Name' id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.deviceName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.deviceName && formik.errors.deviceName && <span className='error-inner-text'>{formik.errors.deviceName}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5">
                            <div className='form-field' >

                                <label htmlFor="exampleInputEmail1" className="form-label">Model</label>
                                <input type="text" name='model' placeholder='Model Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.model}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.model && formik.errors.model && <span className='error-inner-text'>{formik.errors.model}</span>}</div>

                        </div>
                        <div className="col-12 col-sm-5">
                            <div className='form-field' >

                                <label htmlFor="exampleInputEmail1" className="form-label">Serial Number</label>
                                <input type="number" name='serialNumber' placeholder='Enter Serial Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.serialNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.serialNumber && formik.errors.serialNumber && <span className='error-inner-text'>{formik.errors.serialNumber}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5">
                            <div className='form-field' >

                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                <input type="text" name='password' placeholder='Enter Password' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.password && formik.errors.password && <span className='error-inner-text'>{formik.errors.password}</span>}</div>
                        </div>
                        
                        <button className='  mt-3 px-5 btn btn-primary' type="submit" >Submit</button>
                    </div>


                </Form>
            }

        </Formik>

    )

};

export default CustomerDeviceInfo;
