import { IButton } from "@/types/component.types";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Button = ({ text, onClick }: IButton) => {
  return (
    <div>
      <button className="bg-btn px-10 py-4 rounded-full font-medium text-md text-foreground">
        {text}
      </button>
    </div>
  );
};

export default Button;
