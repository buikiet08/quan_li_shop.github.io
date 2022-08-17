import React from 'react'
import { Link } from 'react-router-dom'
import { icons,image } from '../../../../contains'

function Header() {
  return (
    <div>
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
              <Link to="/hanghoa">
                <img src={icons.box} alt='box' />
                <span>Hàng hóa</span>
              </Link>
              <Link to="/giaodich">
                <img src={icons.switchArrow} alt='box' />
                <span>Giao dịch</span>
              </Link>
              <Link to="/congno">
                <img src={icons.users} alt='box' />
                <span>Công nợ</span>
              </Link>
              <Link to="/baocao">
                <img src={icons.bar} alt='box' />
                <span>Báo cáo</span>
              </Link>
              <Link to="/thongke">
                <img src={icons.dollar} alt='box' />
                <span>Thống kê</span>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Header