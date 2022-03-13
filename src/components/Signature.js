import React from 'react'
import SignatureCanvas from 'react-signature-canvas';
const Signature = () => {
  return (
    <SignatureCanvas backgroundColor='grey' penColor='green'
    canvasProps={{width: 230, height: '100%', className: 'sigCanvas'}} />
  )
}

export default Signature