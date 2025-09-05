import { IInput } from "@/types/dashboard.types";
import React from "react";

const Input = ({ labelFor, label, inputType, placeholder }: IInput) => {
  return (
    <div className="flex flex-col my-3">
      <label htmlFor={labelFor} className="py-3 font-bold">
        {label}:
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="focus:outline-white text-foreground outline-white outline py-3 px-2 rounded-md"
      />
    </div>
  );
};

export default Input;
