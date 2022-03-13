import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import { deviceEdit } from '../utils/urls';

const EditDevice = ({deviceInfo,removeModal}) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    const {deviceName,model,serialNumber,password}=deviceInfo
    const moveToDeviceList = () => {
        history.push('/device-table');
    }
    const validate = Yup.object({
        deviceName: Yup.string().required('Device Name Required'), model: Yup.string().required('Model Number Required'), serialNumber: Yup.string().required('Serial Number Required'),
        password: Yup.string().required('Password Required'),
    })
   
    return (
        <Formik validateOnMount initialValues={{
            deviceName: deviceName,
            model: model,
            serialNumber:serialNumber,
            password: password,

        }} onSubmit={ (values) => {
            setIsLoading(true)
             axios.post(`${process.env.REACT_APP_BASE_URL}${deviceEdit}`, values).then((response) => {
                setIsLoading(false)
                sweetalert('Device Edit Sucessful', 'success', moveToDeviceList)
                removeModal()
            }).catch((error) =>{
                setIsLoading(false)
                sweetalert('Something Went Wrong', 'error')
            });
            
        }
        }
            validationSchema={validate}>
            {
                (formik) => <Form className='form'>
                    <h1 className='text-center mt-3'>Device Info</h1>
                    {isLoading&&<Loader/>}
                    <div className="d-flex align-items-center overlay flex-column mt-3   justify-content-center gap-3 create-customer-main mx-2">

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
                                <input type="text" name='serialNumber' placeholder='Enter Serial Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
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
                        <div className='d-flex mx-3'>

                        <button disabled={isLoading?true:false} className='mt-3 px-5 btn mx-5  btn-primary' type="submit" >Add</button>
                        <button disabled={isLoading?true:false} className='mt-3 px-5 btn btn-danger' onClick={()=>removeModal()}  >Cancel</button>
                        </div>
                    </div>


                </Form>
            }

        </Formik>

    )

};

export default EditDevice;
