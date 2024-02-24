import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from '@/util';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ className, children, ...props}: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      className={
        cn(
          "whitespace-nowrap rounded-[22px] bg-[#F3603C] px-8 py-[0.8125rem] text-[0.8125rem] font-bold leading-[1.4615] tracking-normal text-[#FCF6F5] shadow-[0_15px_15px_-15px_rgba(255,159,142,1)] hover:bg-[#F98F75] hover:text-[#FCF6F5]",
          className
        )
      }
    >
      {children}
    </button>
  );
}
