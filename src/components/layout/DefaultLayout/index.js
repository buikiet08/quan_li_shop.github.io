import React from 'react'
import Header from "./Header";


function DefaultLayout({children}) {
  return (
    <div className='w-screen'>
        <Header />
        <div className='w-[1216px] mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default DefaultLayout