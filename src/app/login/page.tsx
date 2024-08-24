'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/Input';

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      if (data.message == 'Login successful') {
        console.log('Login successful:', data);
        alert('Login Successful');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.error('Error:', error);
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <Image src="/logo.svg" width={80} height={80} alt="Lawlens ai Logo" />
      <h1 className="text-3xl font-extrabold">Welcome Back</h1>
      <div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Input
              type="email"
              name="email"
              label="Email*"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              name="password"
              label="Password*"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="relative">
            <button
              className="h-[45px] w-[295px] rounded-md bg-[#E3A706] text-white"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="my-2 flex justify-center gap-2">
          <p>Don't have an account?</p>
          <Link href="/signup" className="cursor-pointer text-[#E3A706]">
            Signup
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

export default Login;
