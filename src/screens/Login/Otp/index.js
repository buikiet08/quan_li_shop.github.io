import React from 'react'
import FormValidate from '../../../components/FormValidate'

function Otp(navigation) {
  return (
    <FormValidate 
      verifieds={true}
      label='Tiếp tục'
      navigation={navigation}
    />
  )
}

export default Otp