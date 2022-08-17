import React,{useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import FogotPassword from './FogotPassword'
import Otp from './Otp'
import NewPassword from './NewPassword'
import image from '../../contains/image'

function Login() {
    const [signIn,setSignIn] = useState(true)
    const [fogot,setFogot] = useState(false)
    const [otp,setOtp] = useState(false)
    const [newPass,setNewPass] = useState(false)
    const [title,setTitle] = useState('Đăng nhập')

    const handleSignUp = () => {
        setTitle('Đăng ký')
        setSignIn(false)
    }

    const handleSignIn = () => {
        setTitle('Đăng nhập')
        setSignIn(true)
    }

    const handleFogot = () => {
        setTitle('Quên mật khẩu')
        setFogot(!fogot)
    }

    const handleOtp = () => {
        setTitle('Quên mật khẩu')
        setFogot(false)
        setOtp(true)
    }

    const handleNew = () => {
        console.log('New password')
        setTitle('Quên mật khẩu')
        setFogot(false)
        setOtp(false)
        setNewPass(true)
    }
   
    
  return (
    <div className={`h-screen w-screen flex justify-center items-center bg-primary`}>
        <div className={`w-500 rounded-lg bg-white p-6 flex flex-col ${fogot || otp ? 'justify-start items-left' : 'justify-center items-center'}`}>
            <h3 className={`font-medium leading-5`}>{title}</h3>
            {
                otp ? 
                <span className='my-4'>Thư thông báo mã xác minh đã được gửi tới email honguyenthienlong@gmail.com của bạn. Hãy chép mã đó vào ô này.</span> : 
                newPass ? <span>Nhập mật khẩu mới của bạn!</span> :
                <img src={image.logoLogin} alt={'logo-login'} />
            }
            {
                !newPass ?
                    (!otp ? 
                    
                        !fogot ?                                     
                            signIn ?
                            <SignIn onClick={handleSignUp} onFogot={handleFogot} /> : 
                            <SignUp onClick={handleSignIn} />                                           
                        :
                        <FogotPassword navigation={handleOtp} />
                    :
                    <Otp navigation={handleNew} />) 
                :
                <NewPassword />
            }
        </div>
        <div className='absolute bottom-0 left-0 bg-white px-[32px] py-[18px] w-full flex justify-between items-center'>
            <div>
                <p className='text-base font-medium leading-6'>Công ty cổ phần thương mại điện tử Chợ Nhà Giàu</p>
            </div>
            <div>
                <span className='leading-4 text-gray-1 cursor-pointer mr-[32px]'>Về chúng tôi</span>
                <span className='leading-4 text-gray-1 cursor-pointer'>Chính sách</span>
            </div>
        </div>
    </div>
  )
}

export default Login