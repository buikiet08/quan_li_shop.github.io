import React from 'react'
import Header from "./Header";


function DefaultLayout({children}) {
  return (
    <div className='w-screen bg-white-2'>
        <Header />
        <div className='w-[1216px] mx-auto pb-11 pt-6'>
          {children}
        </div>
    </div>
  )
}

export default DefaultLayout