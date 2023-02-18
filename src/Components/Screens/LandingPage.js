import React from 'react';
import CustomInput from '../CustomInput';


export default function LandingPage() {
  return (
    <div className="bg-[#f77979] w-4/5 h-4/5 bg-[url('./Assets/images/bg-intro-desktop.png')] 
    bg-no-repeat bg-cover bg-center bg-fixed font-sans flex items-center justify-center p-16"
    >
        <div className='w-1/2 m-4 whitespace-normal space-y-4'>
            <p className='text-4xl font-extrabold text-white'>Learn to code by <br/> watching others</p>
            <p className='font-medium text-white'>See how experienced developers solve problems in real-time.<br/> Watching scripted tutorials is great, but understanding how <br/>developers think is invaluable.</p>
        </div>
        <div className='w-1/2 m-4 flex flex-col space-y-5'>
            <div className='bg-[#5d55a3]/100 shadow-xl flex items-center justify-center text-white text-sm rounded-md h-12 p-3'>
                <span className='text-sm font-bold'>Try it free 7 days</span>&nbsp;then $20/mo. thereafter
            </div>
            <div className='flex flex-col space-y-3 bg-white p-8 rounded-md shadow-xl'>
                <CustomInput type={'text'} placeholder={'First Name'} />
                <CustomInput type={'text'} placeholder={'Last Name'} />
                <CustomInput type={'text'} placeholder={'Email Address'} />
                <CustomInput type={'password'} placeholder={'Password'} />
                <button className='rounded bg-[#3fcc8a] h-12 text-white font-bold' type={'submit'}>CLAIM YOUR FREE TRIAL</button>
                <p className='text-xs font-bold text-gray-500'>By clicking the button, you are agreeing to our <span className='text-[#f77979]'>Terms and Services</span></p>
            </div>
        </div>
    </div>
  )
}
