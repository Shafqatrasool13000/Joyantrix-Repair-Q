import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { editableCustomer } from '../utils/urls';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader'
import { Field } from 'formik';
import DateView from 'react-datepicker'


const EditRepairInfo = ({ repairInfo, removeModal }) => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();

    const { typeOfRepair, trackingNumber, trackingType, appointmentTime, status, estimatedCost } = repairInfo
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'New Ordered', value: '1' },
        { key: 'Transit', value: '2' },
        { key: 'Delivered', value: '3' }
    ]
    const moveToCustomersTable = () => {
        history.push('/repair-info-table');
    }
    const validate = Yup.object({
        typeOfRepair: Yup.string().required('Type of Repair Required'),
        estimatedCost: Yup.string().required('Estimated Cost Required'),
        appointmentTime: Yup.date()
            .required('Required')
            .nullable(),
        trackingType: Yup.string().required('Tracking type Required'),
        status: Yup.string().required('Status Required'),
        trackingNumber: Yup.string().required('Tracking Number Required'),
    })

    return (
        <Formik validateOnMount initialValues={{
            typeOfRepair: typeOfRepair,
            estimatedCost: estimatedCost,
            appointmentTime: '',
            trackingType: trackingType, status: status, trackingNumber: trackingNumber
        }} onSubmit={(values) => {
            setIsLoading(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}${editableCustomer}`, values).then((response) => {
                setIsLoading(false)
                sweetalert('Device Edited Sucessful', 'success', moveToCustomersTable)
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
                    <h1 className='text-center mt-2'>Repair Info</h1>
                    <div className="d-flex align-items-center overlay flex-column mt-3 justify-content-center gap-3 create-customer-main mx-2">
                        <div className="col-12 col-sm-5  ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Type of Repair</label>
                            <div className='form-field' >
                                <input type="text" name='typeOfRepair' className="form-control"
                                    placeholder='Enter Repair Type' id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.typeOfRepair}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.typeOfRepair && formik.errors.typeOfRepair && <span className='error-inner-text'>{formik.errors.typeOfRepair}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5 ">
                            <div className='form-field' >

                                <label htmlFor="exampleInputEmail1" className="form-label">Estimated Cost</label>
                                <br />
                                <input type="number" name='estimatedCost' placeholder='Enter Estimated Cost' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.estimatedCost}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.estimatedCost && formik.errors.estimatedCost && <span className='error-inner-text'>{formik.errors.estimatedCost}</span>}</div>

                        </div>

                        <div className="col-12 col-sm-5 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Appointment Time</label>
                            <Field name='appointmentTime'>
                                {({ form, field }) => {
                                    const { setFieldValue } = form
                                    const { value } = field
                                    return (
                                        <DateView
                                            {...field}
                                            selected={value}
                                            onChange={val => setFieldValue('appointmentTime', val)}
                                        />
                                    )
                                }}
                            </Field>
                            <div className='error-text'>{formik.touched.appointmentTime && formik.errors.appointmentTime && <span className='error-inner-text'>{formik.errors.appointmentTime}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5 ">
                            <div className='form-field' >
                                <label htmlFor="exampleInputEmail1" className="form-label">Tracking type</label>
                                <input type="number" name='trackingType' placeholder='Enter Tracking Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.trackingType}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.trackingType && formik.errors.trackingType && <span className='error-inner-text'>{formik.errors.trackingType}</span>}</div>
                        </div>
                        <div className='col-12 col-sm-5 '>
                            <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
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
                            <div className='error-text'>{formik.touched.status && formik.errors.status && <span className='error-inner-text'>{formik.errors.status}</span>}</div>
                        </div>
                        <div className="col-12 col-sm-5 ">
                            <div className='form-field' >
                                <label htmlFor="exampleInputEmail1" className="form-label">Tracking Number</label>
                                <input type="number" name='trackingNumber' placeholder='Enter Tracking Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.trackingNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.trackingNumber && formik.errors.trackingNumber && <span className='error-inner-text'>{formik.errors.trackingNumber}</span>}</div>

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

export default EditRepairInfo;
