import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { icons,image } from '../../../../contains'

function Header() {
  return (
    <div>
        <div className='w-full bg-black-2 h-[80px]'>
          <div className='w-[1216px] mx-auto flex justify-between items-center h-[100%]'>
            <div className='h-[100%] overflow-hidden'>
              <Link to='/' className='h-[100%]'>
                <img className='h-[100%]' src={image.logoLogin} alt='logo' />
              </Link>
            </div>
            <div className='flex justify-center items-center'>
              <NavLink className='flex justify-center items-center' to="/hotro">
                <img src={icons.question} alt='question' />
                <span className='text-white font-medium leading-5 ml-1'>Hỗ trợ</span>
              </NavLink>
              <NavLink className='ml-8' to='/thongbao'>
                <img src={icons.notification} alt='notification' />
              </NavLink>
              <NavLink className='flex justify-center items-center ml-8' to='/taikhoan'>
                <div className='w-[24px] h-[25px] rounded-[50%] border border-white overflow-hidden mr-2'>
                  <img src={image.logoLogin} alt='logo' />
                </div>
                <span className='text-white font-medium leading-5'>Admin</span>
              </NavLink>
              <div className='flex justify-center items-center ml-8'>
                <span className='text-white font-medium leading-5 mr-1'>VN</span>
                <img src={icons.arrow} alt='arrow' />
              </div>
              <NavLink className='ml-8' to='caidat'>
                <img src={icons.setting} alt='setting' />
              </NavLink>
            </div>
          </div>
        </div>
        <div className='w-full bg-white shadow'>
          <div className='w-[1216px] mx-auto flex justify-start items-center'>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.home} alt='home' />
                <span className='menu-link'>Thống kê</span>
              </NavLink>
              <NavLink to="/hanghoa" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.box} alt='box' />
                <span className='menu-link'>Hàng hóa</span>
              </NavLink>
              <NavLink to="/giaodich" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.switchArrow} alt='giaodich' />
                <span className='menu-link'>Giao dịch</span>
              </NavLink>
              <NavLink to="/congno" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.users} alt='congno' />
                <span className='menu-link'>Công nợ</span>
              </NavLink>
              <NavLink to="/baocao" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.bar} alt='baocao' />
                <span className='menu-link'>Báo cáo</span>
              </NavLink>
              <NavLink to="/thongke" className={({ isActive }) => isActive ? 'active' : 'menu-item'}>
                <img src={icons.dollar} alt='thongke' />
                <span className='menu-link'>Thống kê</span>
              </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Header