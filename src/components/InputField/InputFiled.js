import React from 'react'

const InputFiled = ({ value, onBlur, handleChange, touched, error }) => {
    return (
        <>
            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
            <div className='form-field' >
                <input type="text" name='firstName' className="form-control"
                    placeholder='First Name' id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={value}
                    onBlur={onBlur}
                    onChange={handleChange}
                />
            </div>
            <div className='error-text'>{touched && error && <span className='error-inner-text'>{error}</span>}</div>
        </>
    )
}

export default InputFiled