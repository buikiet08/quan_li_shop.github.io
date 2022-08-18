import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,ComposedChart,Area,Line } from 'recharts';
import { icons} from '../../contains'
const data = [
  {
    name: '22',
    uv: 4000,
    amt: 2400,
  },
  {
    name: '23',
    uv: 3000,
    amt: 2210,
  },
  {
    name: '24',
    uv: 2000,
    amt: 2290,
  },
  {
    name: '25',
    uv: 2780,
    amt: 2000,
  },
  {
    name: '26',
    uv: 1890,
    amt: 2181,
  },
  {
    name: '27',
    uv: 2390,
    amt: 2500,
  },
  {
    name: '28',
    uv: 3490,
    amt: 2100,
  },
];

const data2 = [
  {
    name: 'Thắt lưng nữ màu vàng',
    pv: 1000,
  },
  {
    name: 'Áo vest nam',
    pv: 900,
  },
  {
    name: 'Đồng hồ vàng',
    pv: 400,
  },
  {
    name: 'Điện thoại samsung',
    pv: 350,
  },
  {
    name: 'Tai nghe',
    pv: 200,
  },
  {
    name: 'áo thun nam',
    pv: 100,
  },
];

const listResualt = [
  {
    id:1,
    icon: icons.dollar2,
    label:'Danh thu trong ngày',
    price:'20.000.000đ',
    up:icons.up,
    babel2:'Tăng 80%',
    babel3:'So với ngày hôm trước'
  },
  {
    id:2,
    icon: icons.box2,
    label:'Số lượng đơn hàng',
    price:'20.000.000đ',
    down:icons.down,
    babel2:'Giảm 10%',
    babel3:'So với ngày hôm trước'
  },
  {
    id:3,
    icon: icons.box3,
    label:'Số lượng mặt hàng',
    price:'20.000.000đ',
    up:icons.up,
    babel2:'Tăng 80%',
    babel3:'So với ngày hôm trước'
  },
]
function Home() {
  return (
    <section>
      <section className='bg-white rounded p-4 mb-4'>
        <h3 className='title'>KẾT QUẢ BÁN HÀNG</h3>
        <div className='grid grid-cols-3 gap-36'>
          {
            listResualt.map((item,index) => 
              <div className='p-[10px] flex justify-start'>
                <div className={`w-[48px] h-[48px] rounded ${index === 0 ? 'bg-[#FBF3E0]' : index === 1 ? 'bg-blue' : 'bg-green'} flex justify-center items-center mr-3`}>
                  <img src={item.icon} />
                </div>
                <div className='flex flex-col justify-start items-start'>
                  <span className='leading-5 text-black-3'>{item.label}</span>
                  <h3 className={`text-xl font-medium ${index === 0 ? 'text-yellow' : index === 1 ? 'text-[#6691E7]' : 'text-[#00875A]'} leading-7`}>{item.price}</h3>
                  <div className='flex justify-start items-center mt-1'>
                    <img src={item.up || item.down} />
                    <span className={`ml-[6px] text-xs leading-4 ${item.up ? 'text-[#00875A]' : 'text-[#EB5757]'} `}>{item.babel2}</span>
                  </div>
                  <span className='text-[10px] text-gray-3 leading-4'>{item.babel3}</span>
                </div>
              </div>
            )
          }
        </div>
      </section>

      <section>
        <div>
          <div>
            <div className='bg-white rounded p-4 mb-4'>
              <h3 className='title'>DOANH THU HÀNG HÓA BÁN THÁNG NÀY</h3>
              <ul>
                <li></li>
              </ul>
              <div>
                <ResponsiveContainer width="100%" aspect={3}>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="doanh thu tháng này" fill="#2F80ED" />
                    <Bar dataKey="uv" fill="#2F80ED" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className='bg-white rounded p-4 mb-4'>
              <div>
                <ResponsiveContainer width="100%" aspect={3}>
                  <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data2}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line dataKey="uv" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </section>
  )
}

export default Home