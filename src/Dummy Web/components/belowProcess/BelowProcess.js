import React from 'react'
import process from '../../assets/process.svg'
import backV from '../../assets/process-v.svg'
import './BelowProcess.css'
const BelowProcess = () => {
    return (
        <div id='below-process-main'>
                <div className="below-process-inner">
                        <div className="below-process-s1">
                            <div className='below-process-img'>
                              <img src={process} alt='process1' />
                            </div>
                            <div className='text-area'>
                            <p className='title'>Our Values</p>
                            <p className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                            </div>
                            </div>
                         <div className="below-process-s2 ">
                         <div className='below-process-img '>
                            <img src={process} alt='process2 ' />
                            </div>
                            <div className='text-area '>
                            <p className='title'>Step 2</p>
                            <p className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                         </div>
                            </div>
                         <div className="below-process-s3 process-back2">
                            <div>
                            <img src={process} alt='below-process-img' />
                            </div>
                            <div className='text-area'>
                            <p className='title'>Step 3</p>
                            <p className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                            </div>
                            
                        </div>
                    
            </div>
            <div className="backgroud-v">
                                <img src={backV} alt="" />
                            </div>
        </div>
    )
}

export default BelowProcess
