import React from 'react'

function Button(props) {
  return (
    <button 
    type={props.type} 
    className='w-max rounded text-center bg-black-2 py-[10px] text-white font-medium leading-5 block'
    disabled={props.disabled}
    >
      {props.label}
    </button>
  )
}

export default Button