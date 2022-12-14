import React from 'react'
import FormValidate from '../../../components/FormValidate'


function FogotPassword({navigation}) {
  return (
    <FormValidate 
      email={true}
      captcha={true}
      label='Tiếp tục'
      navigation={navigation}
      />
  )
}

export default FogotPassword