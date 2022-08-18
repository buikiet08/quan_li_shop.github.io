import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDollarSign,faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { icons} from '../../contains'

const listResualt = [
  {
    id:1,
    icon: <FontAwesomeIcon icon={faDollarSign} className='text-yellow text-[24px]' />,
    label:'Danh thu',
    price:'20.000.000đ',
    icon2:icons.up,
    babel2:'Tăng 80%',
    babel3:'So với ngày hôm trước'
  },
  {
    id:2,
    icon: <FontAwesomeIcon icon={faBoxArchive} className='text-[#6691E7] text-[24px]' size={28} />,
    label:'Danh thu',
    price:'20.000.000đ',
    icon2:icons.down,
    babel2:'Tăng 80%',
    babel3:'So với ngày hôm trước'
  },
  {
    id:3,
    icon: <FontAwesomeIcon icon={faBoxArchive} className='text-[#00875A] text-[24px]' size={28} />,
    label:'Danh thu',
    price:'20.000.000đ',
    icon2:icons.up,
    babel2:'Tăng 80%',
    babel3:'So với ngày hôm trước'
  },
]
function Home() {
  return (
    <section>
      <div className='bg-white rounded p-4'>
        <h3 className='title'>KẾT QUẢ BÁN HÀNG</h3>
        <div className='grid grid-cols-3 gap-0'>
          {
            listResualt.map((item,index) => 
              <div className='p-[10px] flex justify-start'>
                <div className='w-[48px] h-[48px] rounded bg-[#FBF3E0] flex justify-center items-center mr-3'>
                  {item.icon}
                </div>
                <div>
                  <span className='leading-5 text-black-3'>{item.label}</span>
                  <h3 className='text-xl font-medium text-yellow leading-7'>{item.price}</h3>
                  <div className='flex justify-start items-center'>
                    <img src={item.icon2} />
                    <span className='ml-[6px]'>{item.babel2}</span>
                  </div>
                  <span>{item.babel3}</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Home