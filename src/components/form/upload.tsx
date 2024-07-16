import React from "react";
import { FiUpload } from "react-icons/fi";

interface IUpload {
  id: string;
  name: string;
  type?: string;
  accept?: string;
  label: string;
  onChange: (e: any) => void;
}

const Upload = ({ id, name, type, accept, label, onChange }: IUpload) => {
  return (
    <div className="flex flex-col">
      <button className="p-0 w-[180px] d-block h-[50px] relative rounded-xl text-white bg-neutral-800 border border-gray-200 hover:bg-black font-bold overflow-hidden hover:cursor-pointer">
        <div className="relative h-full flex items-center font-medium justify-center">
          <FiUpload className="w-4 h-4 mr-2" /> {label}
        </div>
        <input
          id={id}
          name={name}
          type={type || "file"}
          className="absolute opacity-0 left-0 top-0 bottom-0 right-0 hover:cursor-pointer z-10"
          onChange={onChange}
          accept={accept}
          required
        />
      </button>
    </div>
  );
};

export default Upload;
