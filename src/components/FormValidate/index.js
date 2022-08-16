import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../Button';
function FormValidate({
    name = false,
    password = false,
    rePassword = false,
    phone = false,
    fax = false,
    company = false,
    address = false,
    email = false,
    label,
    button = false,
    titleButton,
    onClick,


}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
      {
        name &&
        <>
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
        </>
      }

      {/* password */}
      {
        password && 
        <>
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
        </>
      }

      {/* re-password */}
      {
        rePassword && 
        <>
            <input 
            className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
            type="rePassword" 
            name="rePassword" 
            placeholder='Mật khẩu' 
            {...register('rePassword', {required : true , minLength:6})}  
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.rePassword?.type === 'required' && <p>Vui lòng nhập mật khẩu</p>} 
                    {errors.rePassword?.type === 'minLength' && <p>Vui lòng nhập tối thiểu 6 kí tự</p>} 
                </span>                 
            }
        </>
      }

      {/* phone */}
      {
        phone &&
        <>
            <input 
                className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
                type='number' 
                name="phone" 
                placeholder='Số điện thoại' 
                {...register('phone', {required : true , minLength:10})}
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.phone?.type === 'required' && <p>Vui lòng nhập số điện thoại</p>} 
                    {errors.phone?.type === 'minLength' && <p>Vui lòng nhập tối thiểu 10 kí tự</p>}               
                </span>                 
            }
        </>
      }

      {/* fax */}
      {
        fax &&
        <>
            <input 
                className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
                type='number' 
                name="fax" 
                placeholder='Mã số thuế' 
                {...register('fax', {required : true})}                               
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.fax?.type === 'required' && <p>Vui lòng nhập mã số thuế</p>} 
                </span>                 
            }
        </>
      }

      {/* company */}
      {
        company &&
        <>
            <input 
                className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
                type='text' 
                name="company" 
                placeholder='Tên Công Ty' 
                {...register('company', {required : true})}                               
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.company?.type === 'required' && <p>Vui lòng nhập tên công ty</p>} 
                </span>                 
            }
        </>
      }

      {/* addresses */}
      {
        address &&
        <>
            <input 
                className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
                type='text' 
                name="address" 
                placeholder='Địa chỉ' 
                {...register('address', {
                    required : true
                })}                               
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.address?.type === 'required' && <p>Vui lòng nhập địa chỉ</p>} 
                </span>                 
            }
        </>
      }

      {/* email */}
      {
        email &&
        <>
            <input 
                className='p-[10px] rounded border border-gray mb-3 focus:outline-none' 
                type='email' 
                name="email" 
                placeholder='Email' 
                {...register('email', {
                    required : true ,
                    pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
            />
            {Object.keys(errors).length !== 0 &&
                <span className={'text-xs text-[red] mt-[-9px] mb-2'}>
                    {errors.email?.type === 'required' && <p>Vui lòng nhập email</p>} 
                    {errors.email?.type === 'pattern' && <p>Email không đúng địng dạng</p>}                
                </span>                 
            }
        </>
      }
      {/* button submit */}

      <Button label={label} type="submit" />

      {/* button bottom navigation */}
      {
        button &&
        <div className='text-center mt-4'>
          <span className='text-gray-1 leading-5 cursor-pointer' onClick={onClick}>{titleButton}</span>
        </div>
      }
  </form>
  )
}

export default FormValidate