'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBasketData } from '@/store/clientBasketSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from "@/../../public/logo1.png";
import { Button } from 'flowbite-react';
import { generateOtp, validateOtp } from '@/app/api/client/route';

const Client = ({ params }) => {

  // getting the basket link as parameter
  const basketLink = params.id;

  // nextjs router
  const router = useRouter();

  // redux
  const dispatch = useDispatch();

  // local state
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  // function to verify the OTP entered by user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, data } = await validateOtp(basketLink, otp);
    if (status !== 200) {
      setMessage(data.messages)
    }
    else if (status === 200) {
      dispatch(setBasketData(data));
      router.push('/client/basket');
    }
  }

  // function to generate new OTP
  const otpGeneration = async () => {
    setMessage("");
    const { status, data } = await generateOtp(basketLink);
    setMessage(data.messages);

    if (status !== 200) {
      setError(true);
      return;
    }
    setError(false);
  }

  // useEffect that generates a new OTP whenever the page loads
  useEffect(() => {
    otpGeneration();
  }, [])

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Image src={Logo} alt="wealth spring logo" className='mb-40'  />
      <div  className='mb-20'>
        <div className='flex flex-col'>
          <p className='text-center mt-4'>Enter OTP</p>
          <input 
            required 
            disabled={error}
            type='password' 
            autoComplete='off'
            value={otp} 
            onChange={(e) => { 
              setOtp(e.target.value);
              setError(false);
              setMessage("");
            }} 
            placeholder='One Time Password' 
            className={'mt-2 border-gray-200 rounded-md placeholder-gray-300'} 
          />
          {/* <p className={error ? 'visible text-red-500 text-xs' : 'invisible'}>Wrong OTP!</p> */}
          <div className='flex justify-center items-center mt-2 space-x-2'>
            <Button disabled={error} color='gray' type='button' className='' onClick={otpGeneration}>Resend OTP</Button>
            <Button disabled={error} onClick={handleSubmit} type='submit' className=' '>Submit</Button>
          </div>
          <p className={`font-bold mt-4 flex justify-center ${error ? "text-red-500" : ""}`}>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Client;
