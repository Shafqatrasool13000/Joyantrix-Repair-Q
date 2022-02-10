import React from 'react';
import { Field, Form, Formik } from 'formik';
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as Yup from 'yup'
import axios from 'axios';
import { repairInfo } from '../utils/urls';

const RepairInfo = () => {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'New Ordered', value: 'option1' },
        { key: 'Transit', value: 'option2' },
        { key: 'Delivered', value: 'option3' }
    ]
    const radioOptions = [
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
        estimateCost: Yup.string().required('Estimate Cost Required'), 
        tracking: Yup.string().required('Tracking Required'),
        status: Yup.string().required('Status Required'),
        trackingNumber: Yup.string().required('Tracking Number Required'),
        appointmentTime: Yup.date()
            .required('Required')
            .nullable()
    })
    return (

        <Formik validateOnMount initialValues={{
            typeOfRepair: '',
            estimateCost: '',
            tracking: '',
            status: '',
            trackingNumber: '', 
            appointmentTime: ''

        }} onSubmit={async (values) => {
            await axios.post(`${process.env.REACT_APP_BASE_URL}${repairInfo}`,values).then((response)=>{
               console.log(response)

                console.log(response)
            }).catch((error)=>console.log(error));
                 alert(JSON.stringify(values, null, 2))
             }
             }
        
            validationSchema={validate}>
            {
                (formik) => <Form>
<h1 className='text-center mt-2'>Repair Info</h1>
                    <div className="d-flex align-items-center flex-column mt-3 justify-content-center gap-3 create-customer-main mx-2">
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

                                <label htmlFor="exampleInputEmail1" className="form-label">Estimate Cost</label>
                                <br />
                                <input type="number" name='estimateCost' placeholder='Enter Estimated Cost' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.estimateCost}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.estimateCost && formik.errors.estimateCost && <span className='error-inner-text'>{formik.errors.estimateCost}</span>}</div>

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
                            <Field name="tracking" >
                                {({ field }) => {
                                    return radioOptions.map(option => {
                                        return (
                                            <div  key={option.key}>
                                                <input
                                                    type='radio'
                                                    id={option.value}
                                                    {...field}

                                                    value={option.value}
                                                    checked={field.value === option.value}
                                                />
                                                <label className='ms-2' htmlFor={option.value}>{option.key}</label>
                                            </div>
                                        )
                                    })
                                }}
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
                                <input type="number" name='trackingNumber' placeholder='Enter Tracking Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={formik.values.trackingNumber}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='error-text'>{formik.touched.trackingNumber && formik.errors.trackingNumber && <span className='error-inner-text'>{formik.errors.trackingNumber}</span>}</div>

                        </div>
                    
                        <button className='  mt-3 px-5 btn btn-primary' type="submit" >Submit</button>
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
