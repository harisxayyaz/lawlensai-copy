"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/Input';

const Signup: React.FC = () => {

  const onHandleClick:any = ()  => {
    console.log("here");
    
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <Image src="/logo.svg" width={80} height={80} alt="Lawlens ai Logo" />
      <h1 className="text-3xl font-extrabold">Create an Account</h1>
      <div>
        <form onSubmit={onHandleClick} className="space-y-4">
          <div className="relative">
            <Input
              type="text"
              label="Username*"
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              label="Email*"
         
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              label="Password*"
          
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              label="Confirm Password*"
            
            />
          </div>
          <div className="relative">
            <input
              className="h-[45px] w-[295px] rounded-md bg-[#E3A706] text-white"
              type="submit"
              
            />
          </div>
        </form>
        <div className="my-2 flex justify-center gap-2">
          <p>Already have an account?</p>
          <Link href="/login" className="cursor-pointer text-[#E3A706]">
            Login
          </Link>
        </div>
        <div className="relative my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-xs text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      <button
        className="flex h-[45px] w-[295px] items-center justify-center gap-x-2 rounded-md border-[1px] border-gray-300 text-black"
        type="button"
      >
        <Image src="/google.svg" width={20} height={20} alt="Google Logo" />
        Continue with Google
      </button>
    </main>
  );
};

export default Signup;
