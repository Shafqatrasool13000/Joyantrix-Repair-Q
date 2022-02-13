import React from 'react'
import './QualityTime2.css'
const QualityTime2 = ({ image }) => {
    return (
        <div id='quality-main2'>
           
            <div className='text-section column'>
                <h1 className='title'>
                    <span>
                        Quality time for
                    </span>
                    <span>
                        quality candidates.
                    </span>
                </h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus at neque facilisis mi fusce. Leo accumsan at dolor a, at amet. In adipiscing urna proin vestibulum scelerisque. Nisi magna turpis sit in. Pellentesque nisl tortor, in ac. Aliquet gravida tincidunt maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. Neque nulla non praesent etiam faucibus pretium. Praesent sit malesuada tincidunt praesent.
                    Aliquet gravida tincidunt maecenas dolor malesuada. Sed sollicitudin laoreet a, auctor. Neque nulla non praesent etiam faucibus pretium. Praesent sit malesuada tincidunt praesent.</p>
            </div>
            <div className="img-side column">
                <img src={image} alt='quality' />
            </div>
        </div>
    )
}

export default QualityTime2
