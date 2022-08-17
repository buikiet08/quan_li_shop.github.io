import React from 'react'
import FormValidate from '../../../components/FormValidate'

function NewPassword() {
  return (
    <FormValidate 
      label='Đăng nhập'
      password={true}
      rePassword={true}
      
    />
  )
}

export default NewPassword