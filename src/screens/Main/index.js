import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import ProductPage from './ProductPage'
import { image,icons } from '../../contains'
function Main() {
  return (
    <div className='w-screen'>
        <div className='w-full bg-black-2 h-[80px]'>
          <div className='w-[1216px] mx-auto flex justify-between items-center h-[100%]'>
            <div className='h-[100%] overflow-hidden'>
              <Link to='/'>
                <img className='h-[100%]' src={image.logoLogin} alt='logo' />
              </Link>
            </div>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <img src={icons.question} alt='question' />
                <span className='text-white font-medium leading-5 ml-1'>Hỗ trợ</span>
              </div>
              <div className='ml-8'>
                <img src={icons.notification} alt='notification' />
              </div>
              <div className='flex justify-center items-center ml-8'>
                <div className='w-[24px] h-[25px] rounded-[50%] border border-white overflow-hidden mr-4'>
                  <img src={image.logoLogin} alt='logo' />
                </div>
                <span className='text-white font-medium leading-5'>Admin</span>
              </div>
              <div className='flex justify-center items-center ml-8'>
                <span className='text-white font-medium leading-5 mr-1'>VN</span>
                <img src={icons.arrow} alt='arrow' />
              </div>
              <div className='ml-8'>
                <img src={icons.setting} alt='setting' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='w-[1216px] mx-auto flex justify-start items-center py-[14px]'>
              <Link to="/">
                <img src={icons.home} alt='home' />
                <span>Thống kê</span>
              </Link>
              <Link to="/prodcuts">
                <img src={icons.box} alt='box' />
                <span>Hàng hóa</span>
              </Link>
              
          </div>
        </div>
        <div className='w-[1216px] mx-auto'>
              
                  {/* <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductPage />} /> */}
               
        </div>
    </div>
  )
}

export default Main