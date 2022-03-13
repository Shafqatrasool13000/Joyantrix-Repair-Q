import React,{useState} from 'react';
import { Field, Form, Formik } from 'formik';
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup'
import axios from 'axios';
import { repairInfo } from '../utils/urls';
import { Link, useHistory } from 'react-router-dom';
import sweetalert from '../../SweetAlert';
import Loader from '../Loader/Loader';


const RepairInfo = () => {
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const moveToRepairInfoList = () => {
        history.push('/repair-info-table');
    }
    const dropdownOptions = [
        { key: 'Select Tracking', value: '' },
        { key: 'New Ordered', value: '1' },
        { key: 'Transit', value: '2' },
        { key: 'Delivered', value: '3' }
    ]
    const trackingOptions = [
        { key: 'Select Status', value: '' },
        { key: 'Walk in', value: 'rOption1' },
        { key: 'Special Order', value: 'rOption2' },
        { key: 'Diagnostic', value: 'rOption3' }
    ]
    // const checkboxOptions = [
    //     { key: 'Option 1', value: 'cOption1' },
    //     { key: 'Option 2', value: 'cOption2' },
    //     { key: 'Option 3', value: 'cOption3' }
    // ]

    const validate = Yup.object({
        typeOfRepair: Yup.string().required('Type of Repair Required'),
        estimatedCost: Yup.string().required('Estimated Cost Required'),
        appointmentTime: Yup.date()
            .required('Required')
            .nullable(),
        tracking: Yup.string().required('Tracking  Required'),
        status: Yup.string().required('Status Required'),
        trackingNumber: Yup.string().required('Tracking Number Required'),
    })
    return (

        <Formik validateOnMount initialValues={{
            typeOfRepair: '',
            estimatedCost: '',
            appointmentTime: '',
            tracking: '',
            status: '',
            trackingNumber: ''

        }} onSubmit={(values) => {
            setIsLoading(true)
            axios.post(`${process.env.REACT_APP_BASE_URL}${repairInfo}`,
                values
            ).then((response) => {
                setIsLoading(false)
                sweetalert('Repair info added Sucessfull', 'success', moveToRepairInfoList)
               
            }).catch((error) => {
                setIsLoading(false)
                sweetalert('Something Went Wrong', 'error')
            });
            
        }
        }

            validationSchema={validate}>
            {
                (formik) => <Form className='form'>
                    {isLoading&&<Loader/>}
                    <h1 className='text-center mt-3'>Repair Info</h1>
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
                        <div className='col-12 col-sm-5 '>
                            <label htmlFor="exampleInputEmail1" className="form-label">Tracking</label>
                            <br />
                            <Field as='select' name="tracking" >
                                {trackingOptions.map(option => {
                                    return (
                                        <option key={option.value} value={option.value}>
                                            {option.key}
                                        </option>
                                    )
                                })}
                            </Field>
                            <div className='error-text'>{formik.touched.tracking && formik.errors.tracking && <span className='error-inner-text'>{formik.errors.tracking}</span>}</div>
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
                                <input type="text" name='trackingNumber' placeholder='Enter Tracking Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.trackingNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.trackingNumber && formik.errors.trackingNumber && <span className='error-inner-text'>{formik.errors.trackingNumber}</span>}</div>

                        </div>

                        <div className="d-flex ">

                        <button disabled={isLoading?true:false} className='mt-3 px-5 btn btn-success me-5' type="submit" >Submit </button>
                            
                            <Link to='/repair-info-table'>
                        <button disabled={isLoading?true:false} className='mt-3 px-5 btn btn-primary ms-5'  >Cancel </button>
                        </Link>
                        </div>
                    </div>



                    {/* Select */}


                    {/* <div className='col-12 col-sm-5 '>
                        <label>Select Option</label>
                        <Field name='selectOption'>
                            {({ field }) => {
                                return checkboxOptions.map(option => {
                                    return (
                                        <React.Fragment key={option.key}>
                                            <input
                                                type='checkbox'
                                                id={option.value}
                                                {...field}
                                                value={option.value}
                                                checked={field.value.includes(option.value)}
                                            />
                                            <label htmlFor={option.value}>{option.key}</label>
                                        </React.Fragment>
                                    )
                                })
                            }}
                        </Field>
                        <div className='error-text'>{formik.touched.email && formik.errors.email && <span className='error-inner-text'>{formik.errors.email}</span>}</div>
                    </div> */}





                </Form>
            }

        </Formik>

    )

};

export default RepairInfo;
