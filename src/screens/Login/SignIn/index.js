import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'


function SignIn(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const history = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        localStorage.setItem('accessToken', true)
        history("/", { replace: true })
    }
   
  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
        <input 
        className='p-[10px] rounded border border-gray mb-3 focus:outline-none'
        type='text' 
        name="name" 
        placeholder='Tên đăng nhập'
        {...register('name', {required : true})}
        />
        {Object.keys(errors).length !== 0 &&
            <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                {errors.name?.type === 'required' && <p>Vui lòng nhập tên đăng nhập</p>}                
            </span>                 
        }
        <input 
        className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
        type="password" 
        name="password" 
        placeholder='Mật khẩu'
        {...register('password', {required : true , minLength:6})}
        />
        {Object.keys(errors).length !== 0 &&
            <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                {errors.password?.type === 'required' && <p>Vui lòng nhập mật khẩu</p>} 
                {errors.password?.type === 'minLength' && <p>Vui lòng nhập tối thiểu 6 kí tự</p>}               
            </span>                 
        }
        <div className='flex justify-between mb-5'>
            <div className='flex item-center'>
                <input type="checkbox" />
                <span className='ml-2 text-xs leading-4 text-gray-1'>Duy trì đăng nhập</span>
            </div>
            <span onClick={props.onFogot} className='cursor-pointer text-xs leading-4 text-black-2 font-medium'>Quên mật khẩu</span>
        </div>
        <Button label="Đăng nhập" type="submit" />
        <div className='text-center mt-4'>
            <span className='text-gray-1 leading-5 cursor-pointer' onClick={props.onClick}>---   Đăng ký   ---</span>
        </div>
    </form>
  )
}

export default SignIn