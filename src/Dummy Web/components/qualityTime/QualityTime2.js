import React from 'react'
import './QualityTime2.css'
const QualityTime2 = ({ image }) => {
    return (
        <div id='quality-main2' className='row'>
              <div className="img-side order-md-0 order-1 col-md-6  gap-2">
                <img src={image} alt='quality' />
            </div>
            <div className='text-section order-md-1 order-0 col-md-6  gap-2'>
                <h1 className='title'>
                    <span>
                        Best Ever Online
                    </span>
                    <br />
                    <span>
                        Mobile Shop
                    </span>
                </h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at neque facilisis mi fusce. Leo accumsan at dolor a, at amet. In adipiscing urna proin vestibulum scelerisque. Nisi magna turpis sit in. Pellentesque nisl tortor, in ac. Aliquet gravida tincidunt maecenas dolor malesuada.
                </p>
                <p className='description'>
                    Aliquet gravida tincidunt maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. Neque nulla non praesent etiam faucibus pretium. Praesent sit malesuada tincidunt praesent.</p>
            </div>
          
        </div>
    )
}

export default QualityTime2
