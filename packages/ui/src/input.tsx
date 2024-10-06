"use client"

import { ReactNode } from "react";

interface ButtonProps {
  // children: ReactNode;
  className?: string;
  appName: string;
  label: string;
  type?: string;
}

export const Input = ({ className, appName, label, type }: ButtonProps) => {
  return (

    <div className="flex flex-col">
      <input className={className} placeholder={label} type={type}></input>
    </div>

  );
};