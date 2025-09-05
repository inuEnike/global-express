import { IButton } from "@/types/component.types";
import React from "react";

const Button = ({ text, onClick, cursor }: IButton) => {
  const cursorType = cursor ? `cursor-${cursor}` : "cursor-pointer";
  return (
    <div>
      <button
        className={`bg-btn px-10 py-4 rounded-full font-medium text-md text-foreground ${cursorType}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
