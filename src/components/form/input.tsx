import React from "react";

interface IInput {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: any) => void;
  value?: string;
  helper?: string;
}

const Input = ({ id, name, label, placeholder, type, onChange, value, helper }: IInput) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-indigo-600 text-sm md:text-[1.2rem]"
        style={{ marginRight: 0 }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        className="mt-2 bg-indigo-500/10 border border-indigo-400 text-neutral-800 text-sm placeholder:text-neutral-500 rounded-lg focus:outline-none block w-full p-2.5"
        placeholder={placeholder}
        type={type}
        value={value}
        required
      />
      <div className="text-sm mt-1 text-neutral-400">{helper}</div>
    </div>
  );
};

export default Input;
