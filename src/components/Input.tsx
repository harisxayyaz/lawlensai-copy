import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ type, label}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={label}
        className="text-md border-purple peer h-[52px] w-[297px] rounded-md border bg-transparent px-3 text-black outline-none focus:border-[#E3A706] active:border-[#E3A706]"
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2 transform px-2 text-sm text-black transition-all peer-valid:top-0 peer-valid:bg-white peer-valid:text-sm peer-focus:top-0 peer-focus:bg-white peer-focus:text-sm peer-focus:text-[#E3A706]"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
