import React from 'react'
import { InputFieldMain } from './StyledInput'

const InputFiled = ({ label, value, onBlur, onChange, touched, error, name,placeholder }) => {
    return (
        <InputFieldMain>
            <div className='form-field'>
                <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
                <div className='form-field' >
                    <input type="text" name={name} className="form-control input-field"
                        placeholder={placeholder} id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                    />
                </div>
                <div className='error-text'>{touched && error && <span className='error-inner-text'>{error}</span>}</div>
            </div>
        </InputFieldMain>
    )
}

export default InputFiled