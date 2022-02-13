import React from 'react'
import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loading-indicator'>
    <Oval
        ariaLabel="loading-indicator"
        height='4rem'
        width='4rem'
        strokeWidth={5}
        secondaryColor="green"
    />
</div>
  )
}

export default Loader