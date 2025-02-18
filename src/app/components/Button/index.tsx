import React, { JSX } from 'react'

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: JSX.Element;
  }
  
  export default function Button({ text, type = "button", className, icon }: ButtonProps) {
    return (
      <button type={type} className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-md ${className}`}>
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </button>
    );
  }
  